var main = Process.enumerateModules()[0]
var base = main.base
send('BASE: ' + base)
var syms = main.enumerateExports()
send('EXPORTS: ')
send(syms)
send(base.add(0x670))
const fib = new NativeFunction(base.add(0x670), 'int', ['int', 'pointer'])

var rec = false

Interceptor.attach(ptr("0x00400535"), {
    onEnter(args) {
        send(this.context.rdi + ' ' + this.context.r8)
    }
})
