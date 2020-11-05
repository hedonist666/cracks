var main = Process.enumerateModules()[0]
var base = main.base
send('BASE: ' + base)
var syms = main.enumerateExports()
send('EXPORTS: ')
send(syms)
send(base.add(0x670))
const fib = new NativeFunction(base.add(0x670), 'int', ['int', 'pointer'])

var vals = []

Interceptor.attach(ptr("0x00400538"), {
    onEnter() {
        var val = parseInt(this.context.rdi)
        vals.push(val)
        if (vals.length == 8) {
            send(vals)
            vals = []
        }
    }
})
