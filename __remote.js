var main = Process.enumerateModules()[0]
var base = main.base
send('BASE: ' + base)
var syms = main.enumerateExports()
send('EXPORTS: ')
send(syms)
send(base.add(0x670))
const fib = new NativeFunction(base.add(0x670), 'int', ['int', 'pointer'])


var rbx = undefined
var r8 = undefined 
var first = true
Interceptor.attach(ptr("0x00400524"), {
    onEnter(args) {
        rbx = this.context.rbx
        r8 = this.context.r8
        send(this.context)
    }
})

Interceptor.attach(ptr("0x00400531"), {
    onEnter(args) {
        if (rbx) this.context.rbx = rbx
        if (r8) this.context.r8 = r8
        if (first) {
            this.context.rbx = 0
            first = false
        }
    }
})

Interceptor.attach(ptr("0x00400549"), {
    onEnter(args) {
        send('END OF LOOP')
    }
})

var mem = Memory.alloc(4)
mem.writeInt(1)
send(fib(37, mem))
send(mem.readInt())

var cache = [[[1,1], [1, 0], [2, 0]], [[1, 0], [1, 1], [2, 1]]]

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
        send('FROM CACHE')
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

Interceptor.replace(fib, newfib)
Interceptor.flush()

rpc.exports = {
    show() {
        return cache
    }
}
