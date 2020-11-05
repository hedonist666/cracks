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


//var rbx, r8, r12, r9, rsp, rbp
var context
Interceptor.attach(ptr("0x00400524"), {
    onEnter(args) {
        send(this.context)
        rbx = this.context.rbx
        r8 = this.context.r8
        r12 = this.context.r12
        r9 = this.context.r9
        rsp = this.context.rsp
        rbp = this.context.rbp
        r11 = this.context.r11
    }
})

Interceptor.attach(ptr("0x00400531"), {
    onEnter(args) {
        if (rbx) this.context.rbx = rbx
        if (r8) this.context.r8 = r8
        if (r12) this.context.r12 = r12
        if (r9) this.context.r9 = r9
        if (rsp) this.context.rsp = rsp
        if (rbp) this.context.rbp = rbp
        if (r11) this.context.r11 = r11
        send(this.context)
    }
})

Interceptor.attach(ptr("0x00400538"), {
    onEnter() {
        send(this.context.rdi + ' ' + this.context.r8)
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

var main = new NativeFunction(ptr("0x004004e0"), 'int', [])
main()
