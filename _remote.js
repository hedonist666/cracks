var main = Process.enumerateModules()[0]
var base = main.base
send('BASE: ' + base)
var syms = main.enumerateExports()
send('EXPORTS: ')
send(syms)
send(base.add(0x670))
const fib = new NativeFunction(base.add(0x670), 'int', ['int', 'pointer'])


/*
var mem = Memory.alloc(4)
mem.writeInt(0)
send(fib(33, mem))
send(mem.readInt())
/*
[
[
[ 1, 1  ],  [ 1, 0  ],
[ 2, 0  ],  [ 3, 0  ],
[ 5, 0  ],  [ 8, 1  ],
[ 13, 0  ], [ 21, 0  ],
[ 34, 0  ], [ 55, 1  ],
[ 89, 1  ], [ 144, 0  ]
],
[
[ 1, 0  ],  [ 1, 1  ],
[ 2, 1  ],  [ 3, 1  ],
[ 5, 1  ],  [ 8, 0  ],
[ 13, 1  ], [ 21, 1  ],
[ 34, 1  ], [ 55, 0  ],
[ 89, 0  ], [ 144, 1  ]
]
]
]
*   ]
* ]
 */
var cache = [[[1,1], [1, 0], [2, 0]], [[1, 0], [1, 1], [2, 1]]]

/*
Interceptor.attach(fib, {
    onEnter(args) {
        send(JSON.stringify({
            type: 'call',
            args: [args[0], args[1].readInt()]
        }))
        this.ptr = args[1]
    },
    onLeave(ret) {
        send(JSON.stringify({
            type: 'ret',
            args: [ret, this.ptr.readInt()]
        }))
    }
})
*/

/*
Interceptor.attach(fib, {
    onEnter(args) {
        this.arg1 = parseInt(args[0])
        this.arg2 = args[1].readInt()
        this.ptr = args[1]
        send(cache)
    },
    onLeave(ret) {
        cache[this.arg2][this.arg1] = []
        cache[this.arg2][this.arg1].push(parseInt(ret), this.ptr.readInt())
        send('from native fib function: ')
        send(JSON.stringify({
            data: [
                this.arg1,
                this.arg2,
                ret,
                this.ptr.readInt()
            ]
        }))
        send(ret)
    }
})
*/

function cb(num, ptr, rec = false) {
    if (!rec) {
        send(JSON.stringify({
            type: 'call',
            args: [parseInt(num), ptr.readInt()]
        }))
    }
    var k = ptr.readInt();
    num = parseInt(num)
    if (cache[k][num]) {
        ptr.writeInt(cache[k][num][1])
        if (!rec) {
            send(JSON.stringify({
                type: 'ret',
                args: cache[k][num]
            }))
        }
        return cache[k][num][0];
    }
    else {
        var r1 = cb(num - 1, ptr, true)
        var r2 = cb(num - 2, ptr, true)
        var r3 = r1 + r2
        var r4 = r3
        r3 = r3 - (r3 >> 1 & 0x55555555);
    }
    r3 = (r3 >> 2 & 0x33333333) + (r3 & 0x33333333);
    r3 = (r3 >> 4) + r3;
    r3 = (r3 >> 8 & 0xf0f0f) + (r3 & 0xf0f0f0f);
    ptr.writeInt(ptr.readInt() ^ (r3 >> 0x10) + r3 & 1)
    cache[k][num] = []
    cache[k][num].push(r4, ptr.readInt())
    if (!rec) {
        send(JSON.stringify({
            type: 'ret',
            args: cache[k][num]
        }))
    }
    return r4
}

var newfib = new NativeCallback(cb, 'int', ['int', 'pointer'])

/*
var mem = Memory.alloc(4)
mem.writeInt(0)
send("TEST:")
send(cb(33, mem))
send(mem.readInt())
mem.writeInt(0)
send(fib(33, mem))
send(mem.readInt())
*/

/*
Interceptor.replace(fib, newfib)
Interceptor.flush()
send(Instruction.parse(ptr("0x40052c")))
send(Instruction.parse(ptr("0x400670")))
var instr = Instruction.parse(ptr("0x400670"))
var addr = ptr(instr.opStr)
instr = Instruction.parse(addr)
for (var i = 0; i < 50; ++i) {
    send(instr.mnemonic + ' ' + instr.opStr)
    instr = Instruction.parse(instr.next)
}
