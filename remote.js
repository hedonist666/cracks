var main = Process.enumerateModules()[0]
var base = main.base
send('BASE: ' + base)
var syms = main.enumerateExports()
send('EXPORTS: ')
send(syms)
send(base.add(0x670))
const fib = new NativeFunction(base.add(0x672), 'void', ['int', 'pointer'])

Interceptor.attach(Module.getExportByName(null, 'putc'), {
    onEnter(args) {
        send('printf')
        send(args[0])
    }
})

var fibNumbers = [1, 1]
function cb(num, ptr) {
    send(JSON.stringify({
        type: 'call',
        args: [parseInt(num), ptr.readInt()]
    }))
    if (!fibNumbers[num]) fibNumbers[num] = cb(num - 1, ptr) + cb(num - 2, ptr)
    var a = fibNumbers[num]
    a = (a >> 2 & 0x33333333) + (a & 0x33333333)
    a += (a >> 4)
    a = (a >> 8 & 0xf0f0f) + (a & 0xf0f0f0f)
    ptr.writeInt(ptr.readInt() ^ (a >> 0x10) + a & 1)
    send(JSON.stringify({
        type: 'ret',
        args: [fibNumbers[num]]
    }))
    return fibNumbers[num]
}
var newfib = new NativeCallback(cb, 'int', ['int', 'pointer'])

Interceptor.replace(fib, newfib)

/*
Interceptor.attach(fib, {
    onEnter(args) {
        send(JSON.stringify({
            type: 'args',
            pld: [parseInt(args[0]), args[1].readInt()]
        }))
    },
    onLeave(ret) {
        send(JSON.stringify({
            type: 'ret',
            pld: parseInt(ret)
        }))
        return ret
    }
})
*/
