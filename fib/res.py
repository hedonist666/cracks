from unicorn import *
from unicorn.x86_const import *
import struct

def read(name):
    with open(name, 'rb') as f:
        return f.read()

def u32(data):
    return struct.unpack("I", data)[0]

def p32(num):
    return struct.pack("I", num)

FIBONACCI_ENTRY = 0x00400670
FIBONACCI_END = [ 0x004006f1, 0x00400709 ]

instructions_skip_list = [0x004004ef,0x004004f6,0x00400502,0x0040054f]

stack = []

d = {}

def hook_code(mu, address, size, user_data):
    if address in instructions_skip_list:
        mu.reg_write(UC_X86_REG_RIP, address+size)
    elif address == 0x400560:
        c = mu.reg_read(UC_X86_REG_RDI)
        print(chr(c),end="")
        mu.reg_write(UC_X86_REG_RIP, address+size)
    elif address == FIBONACCI_ENTRY:
        arg0 = mu.reg_read(UC_X86_REG_RDI)
        r_rsi = mu.reg_read(UC_X86_REG_RSI)
        arg1 = u32(mu.mem_read(r_rsi, 4))
        if (arg0, arg1) in d:
            (ret_rax, ret_ref) = d[(arg0, arg1)]
            mu.reg_write(UC_X86_REG_RAX, ret_rax)
            mu.mem_write(r_rsi, p32(ret_ref))
            mu.reg_write(UC_X86_REG_RIP, 0x400582)
        else:
            stack.append((arg0, arg1,r_rsi))
    elif address in FIBONACCI_END:
        (arg0, arg1, r_rsi) = stack.pop()
        ret_rax = mu.reg_read(UC_X86_REG_RAX)
        ret_ref = u32(mu.mem_read(r_rsi,4))
        d[(arg0, arg1)]=(ret_rax, ret_ref)

mu = Uc (UC_ARCH_X86, UC_MODE_64)
BASE = 0x400000
STACK_ADDR = 0x0
STACK_SIZE = 1024*1024

mu.mem_map(BASE, 1024*1024)
mu.mem_map(STACK_ADDR, STACK_SIZE)

mu.mem_write(BASE, read("./fibonacci"))
mu.reg_write(UC_X86_REG_RSP, STACK_ADDR + STACK_SIZE - 1)

mu.hook_add(UC_HOOK_CODE, hook_code)

mu.emu_start(0x004004e0, 0x00400575)
print()
