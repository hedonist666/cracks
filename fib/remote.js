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
var vals = []
Interceptor.attach(ptr("0x00400538"), {
    onEnter() {
        var val = parseInt(this.context.rdi)
        vals.push(val)
        this.context.r8 = vals.length - 1
        if (vals.length == 8) {
            send(vals)
            vals = []
        }
    }
})
*/

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
Interceptor.flush()
Interceptor.attach(fib, {
    onEnter(args) {
        this.rsp = this.context.rsp
        this.r8 = this.context.r8
        this.rbp = this.context.rbp
        this.r12 = this.context.r12
        this.r9 = this.context.r9
        this.rbx = this.context.rbx
        this.r11 = this.context.r11
        this.rcx = this.context.rcx
    },
    onLeave(ret) {
        this.context.r8 = this.r8
        this.context.rbp = this.rbp
        this.context.r12 = this.r12
        this.context.r9 = this.r9
        this.context.rsp = this.rsp
        this.context.rbx = this.rbx
        this.context.r11 = this.r11
        this.context.rcx = this.rcx
    }
})

/*
Interceptor.attach(ptr("0x00400538"), {
    onEnter(args) {
        send('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-')
    }
})

Interceptor.attach(ptr("0x00400538"), {
    onEnter(args) {
        send(this.context.rdi + ' ' + this.context.r8) 
    }
})
*/

var main = new NativeFunction(ptr("0x004004e0"), 'int', [])
main()
