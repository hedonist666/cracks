var out = Process.enumerateModules()[0]
var base = out.base
send('BASE: ' + base)
var syms = out.enumerateExports()
send('EXPORTS: ')
send(syms)
send(base.add(0x670))
const fib = new NativeFunction(base.add(0x670), 'int', ['int', 'pointer'])

var str = Memory.dup(ptr("0x004007e1"), 32)
send(str.toString(), str.readByteArray(32))

Interceptor.attach(ptr("0x004004e9"), {
    onEnter(args) {
        this.context.rbp = str
    }
})



/*
var r11, rbx, r8, r12, r9, rsp, rbp
Interceptor.attach(ptr("0x0040051b"), {
    onEnter(args) {
        rbx = this.context.rbx
        r8 = this.context.r8
        send('r8 was: ' + r8)
        r12 = this.context.r12
        r9 = this.context.r9
        rsp = this.context.rsp
        rbp = this.context.rbp
        r11 = this.context.r11
    }
})


Interceptor.attach(ptr("0x00400531"), {
    onEnter(args) {
        this.context.rbx = rbx
        this.context.r8 = r8
        send('r8 is: ' + r8)
        this.context.r12 = r12
        this.context.r9 = r9
        this.context.rsp = rsp
        this.context.rbp = rbp
        this.context.r11 = r11
    }
})
*/


var vals = []
var syms = 1
Interceptor.attach(ptr("0x00400538"), {
    onEnter() {
        /*send(this.context.rdi + ' ' + this.context.r8)
        var i = parseInt(this.context.r8)
        var val = parseInt(this.context.rdi)
        vals.push(val)
        if (i == 7) {
            send(vals)
            vals = []
        }
        */
        var val = parseInt(this.context.rdi)
        vals.push(val)
        this.context.r8 = vals.length - 1
        //this.context.rbp = str.add(syms - 1)
        if (vals.length == 8) {
            send(vals)
            vals = []
            //syms += 1
        }
    }
})

//var fibuf = Memory.alloc(200)
//var fibuf = ptr("0x004007b0")
var fibuf = ptr("0x00400590")
Memory.protect(fibuf, 200, 'rwx')
Memory.copy(fibuf, fib, 200)
send(ptr(fibuf.toInt32()))
var instr = Instruction.parse(fibuf)
for (let i = 0; i < 50; ++i) {
    if (instr.mnemonic === 'call') {
        var wrt = new X86Writer(instr.address)
        wrt.putCallAddress(fib)
        wrt.flush()
        instr = Instruction.parse(instr.address)
        send('PATCHING:')
        send(instr.mnemonic + ' ' + instr.opStr)
    }
    instr = Instruction.parse(instr.next)
}

instr = Instruction.parse(fibuf.add(162))
send("SUKAAA")
send(instr.mnemonic + ' ' + instr.opStr)
var wrt = new X86Writer(instr.address)
wrt.putCallAddress(fib)
wrt.flush()
instr = Instruction.parse(instr.address)
send('PATCHING:')
send(instr.mnemonic + ' ' + instr.opStr)


instr = Instruction.parse(fibuf)
for (let i = 0; i < 50; ++i) {
    send(instr.mnemonic + ' ' + instr.opStr)
    instr = Instruction.parse(instr.next)
}

var newfib = new NativeFunction(fibuf, 'int', ['int', 'pointer'])
var buf = Memory.alloc(4)
buf.writeInt(0)
send("=========TEST===========")
send(newfib(33, buf))
send(buf.readInt())
send("========================")

var cache = [[], []]

Interceptor.attach(newfib, {
    onEnter(args) {
        this.arg1 = parseInt(args[0])
        this.arg2 = args[1].readInt()
        this.ptr  = args[1]
    },
    onLeave(ret) {
        cache[this.arg2][this.arg1] = [parseInt(ret), this.ptr.readInt()]
    }
})

//var max = 0
function cb(num, ptr) {
    var k = ptr.readInt()
    if (cache[k][num]) {
        ptr.writeInt(cache[k][num][1])
        return cache[k][num][0]
    }
    else {
        return newfib(num, ptr)
    }
}

var nativeCB = new NativeCallback(cb, 'int', ['int', 'pointer'])
Interceptor.replace(fib, nativeCB)

/*
var instr = Instruction.parse(ptr("0x004004e0"))
for (var i = 0; i < 103; ++i) {
    send(instr.address + ': ' + instr.mnemonic + ' ' + instr.opStr)
    instr = Instruction.parse(instr.next)
    if (instr.mnemonic == 'jmp') {
        send('ANALYZING JUMP')
        var addr = instr.opStr
        var instr1 = Instruction.parse(ptr(addr))
        for (var j = 0; j < 3; ++j) {
            send(instr1.address + ': ' + instr1.mnemonic + ' ' + instr1.opStr)
            instr1 = Instruction.parse(instr1.next)
        }
    }
}
*/

var main = new NativeFunction(ptr("0x004004e0"), 'int', [])
main()
