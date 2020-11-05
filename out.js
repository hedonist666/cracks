{*}_{*} process with PID  8723
{ type: 'send', payload: 'BASE: 0x400000' }
{ type: 'send', payload: 'EXPORTS: ' }
{
  type: 'send',
  payload: [ { type: 'variable', name: 'stdout', address: '0x601038' } ]
}
{ type: 'send', payload: '0x400670' }
{ type: 'send', payload: '0x7f901585fc30' }
<Buffer 7e 07 e2 9c cc c9 2b fc 34 04 6f 4e 12 00 50 a9 02 3a ba c2 8e 41 99 98 f5 8d 51 4d a6 c6 43 12>
{ type: 'send', payload: '0x400590' }
{ type: 'send', payload: 'PATCHING:' }
{ type: 'send', payload: 'call 0x400670' }
{ type: 'send', payload: 'PATCHING:' }
{ type: 'send', payload: 'call 0x400670' }
{ type: 'send', payload: 'test edi, edi' }
{ type: 'send', payload: 'push r12' }
{ type: 'send', payload: 'push rbp' }
{ type: 'send', payload: 'mov rbp, rsi' }
{ type: 'send', payload: 'push rbx' }
{ type: 'send', payload: 'je 0x400618' }
{ type: 'send', payload: 'cmp edi, 1' }
{ type: 'send', payload: 'mov ebx, edi' }
{ type: 'send', payload: 'je 0x400630' }
{ type: 'send', payload: 'lea edi, [rdi - 2]' }
{ type: 'send', payload: 'call 0x400670' }
{ type: 'send', payload: 'lea edi, [rbx - 1]' }
{ type: 'send', payload: 'mov r12d, eax' }
{ type: 'send', payload: 'mov rsi, rbp' }
{ type: 'send', payload: 'call 0x400670' }
{ type: 'send', payload: 'add eax, r12d' }
{ type: 'send', payload: 'mov edx, eax' }
{ type: 'send', payload: 'mov ebx, eax' }
{ type: 'send', payload: 'shr edx, 1' }
{ type: 'send', payload: 'and edx, 0x55555555' }
{ type: 'send', payload: 'sub ebx, edx' }
{ type: 'send', payload: 'mov ecx, ebx' }
{ type: 'send', payload: 'mov edx, ebx' }
{ type: 'send', payload: 'shr ecx, 2' }
{ type: 'send', payload: 'and ecx, 0x33333333' }
{ type: 'send', payload: 'mov esi, ecx' }
{ type: 'send', payload: 'and edx, 0x33333333' }
{ type: 'send', payload: 'lea ecx, [rsi + rdx]' }
{ type: 'send', payload: 'mov edx, ecx' }
{ type: 'send', payload: 'shr edx, 4' }
{ type: 'send', payload: 'add edx, ecx' }
{ type: 'send', payload: 'mov esi, edx' }
{ type: 'send', payload: 'and edx, 0xf0f0f0f' }
{ type: 'send', payload: 'shr esi, 8' }
{ type: 'send', payload: 'and esi, 0xf0f0f' }
{ type: 'send', payload: 'lea ecx, [rsi + rdx]' }
{ type: 'send', payload: 'mov edx, ecx' }
{ type: 'send', payload: 'shr edx, 0x10' }
{ type: 'send', payload: 'add edx, ecx' }
{ type: 'send', payload: 'and edx, 1' }
{ type: 'send', payload: 'xor dword ptr [rbp], edx' }
{ type: 'send', payload: 'pop rbx' }
{ type: 'send', payload: 'pop rbp' }
{ type: 'send', payload: 'pop r12' }
{ type: 'send', payload: 'ret ' }
{ type: 'send', payload: 'nop word ptr [rax + rax]' }
{ type: 'send', payload: 'mov edx, 1' }
{ type: 'send', payload: 'xor dword ptr [rbp], edx' }
{ type: 'send', payload: 'mov eax, 1' }
{ type: 'send', payload: 'pop rbx' }
{ type: 'send', payload: '=========TEST===========' }
{ type: 'send', payload: 5702887 }
{ type: 'send', payload: '========================' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0xd',
    rcx: '0x0',
    rdx: '0x7f900effd640',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x49',
    r10: '0x4007d0',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x1',
    r8: '0x1',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x2',
    r8: '0x2',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x3',
    r8: '0x3',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x3',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x4',
    r8: '0x4',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x5',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x5',
    r8: '0x5',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x48',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x6',
    r8: '0x6',
    r9: '0x68',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xd',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x68',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc0ac',
    rdi: '0x7',
    r8: '0x7',
    r9: '0x68',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x15',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc30',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x68',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x68',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0x8',
    r8: '0x0',
    r9: '0x7e',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x22',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x7e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0x9',
    r8: '0x1',
    r9: '0x7e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x37',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x7e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0xa',
    r8: '0x2',
    r9: '0x7c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x59',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x7c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0xb',
    r8: '0x3',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x90',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0xc',
    r8: '0x4',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe9',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0xd',
    r8: '0x5',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x179',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0xe',
    r8: '0x6',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x262',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc0ac',
    rdi: '0xf',
    r8: '0x7',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x3db',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc31',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x78',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x78',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x10',
    r8: '0x0',
    r9: '0x7',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x63d',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x11',
    r8: '0x1',
    r9: '0x6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa18',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x12',
    r8: '0x2',
    r9: '0x4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1055',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x13',
    r8: '0x3',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1a6d',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x14',
    r8: '0x4',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x2ac2',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x15',
    r8: '0x5',
    r9: '0x10',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x452f',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x10',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x16',
    r8: '0x6',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x6ff1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc0ac',
    rdi: '0x17',
    r8: '0x7',
    r9: '0x70',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb520',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x10',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc32',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x70',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x70',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x18',
    r8: '0x0',
    r9: '0xe2',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x12511',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xe2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x19',
    r8: '0x1',
    r9: '0xe3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1da31',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xe3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x1a',
    r8: '0x2',
    r9: '0xe3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x2ff42',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xe3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x1b',
    r8: '0x3',
    r9: '0xe3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4d973',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xe3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x1c',
    r8: '0x4',
    r9: '0xeb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x7d8b5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xeb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x1d',
    r8: '0x5',
    r9: '0xfb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xcb228',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xfb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x1e',
    r8: '0x6',
    r9: '0xfb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x148add',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xfb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc0ac',
    rdi: '0x1f',
    r8: '0x7',
    r9: '0xfb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x213d05',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x18',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc33',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xfb',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x7b',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc34',
    rsi: '0x7f900effc0ac',
    rdi: '0x20',
    r8: '0x0',
    r9: '0x9c',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x35c7e2',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc34',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x9c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc34',
    rsi: '0x7f900effc0ac',
    rdi: '0x21',
    r8: '0x1',
    r9: '0x9c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9de8d6d',
    rcx: '0x2080a09',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc34',
    rsi: '0x20604',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x9c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a70c',
    rdi: '0x22',
    r8: '0x2',
    r9: '0x9e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x8cccc9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x9e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a70c',
    rdi: '0x23',
    r8: '0x3',
    r9: '0x9e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe3d1b0',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x9e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a70c',
    rdi: '0x24',
    r8: '0x4',
    r9: '0x96',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x1709e79',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x96',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a70c',
    rdi: '0x25',
    r8: '0x5',
    r9: '0x86',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x2547029',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x86',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a70c',
    rdi: '0x26',
    r8: '0x6',
    r9: '0x86',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x3c50ea2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x86',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a70c',
    rdi: '0x27',
    r8: '0x7',
    r9: '0xc6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x6197ecb',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x20',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc34',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xc6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x46',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x28',
    r8: '0x0',
    r9: '0xcc',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9de8d6d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xcc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x29',
    r8: '0x1',
    r9: '0xcd',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xff80c38',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xcd',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x2a',
    r8: '0x2',
    r9: '0xcd',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x19d699a5',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xcd',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x2b',
    r8: '0x3',
    r9: '0xc9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x29cea5dd',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xc9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x2c',
    r8: '0x4',
    r9: '0xc1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x43a53f82',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xc1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x2d',
    r8: '0x5',
    r9: '0xd1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x5704e7',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xd1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc35',
    rsi: '0x7f900effc0ac',
    rdi: '0x2e',
    r8: '0x6',
    r9: '0xf1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x6d73e55f',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xf1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7ffe2981a70c',
    rdi: '0x2f',
    r8: '0x7',
    r9: '0xb1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xb11924e1',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x28',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc35',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb1',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x31',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc36',
    rsi: '0x7f900effc0ac',
    rdi: '0x30',
    r8: '0x0',
    r9: '0xc9',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1e8d0a40',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xc9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a70c',
    rdi: '0x31',
    r8: '0x1',
    r9: '0xc8',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xee333961',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xc8',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a70c',
    rdi: '0x32',
    r8: '0x2',
    r9: '0xca',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xbdd96882',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xca',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a70c',
    rdi: '0x33',
    r8: '0x3',
    r9: '0xca',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xac0ca1e3',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xca',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a70c',
    rdi: '0x34',
    r8: '0x4',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x69e60a65',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a70c',
    rdi: '0x35',
    r8: '0x5',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xcfa62f21',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc36',
    rsi: '0x7f900effc0ac',
    rdi: '0x36',
    r8: '0x6',
    r9: '0xe2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x15f2ac48',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xe2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a70c',
    rdi: '0x37',
    r8: '0x7',
    r9: '0xa2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x7fd8b6ad',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xa2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x95cb62f5',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x30',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc36',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xa2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0xa2',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc37',
    rsi: '0x7f900effc0ac',
    rdi: '0x38',
    r8: '0x0',
    r9: '0x2b',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x22',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x38',
    r8: '0x0',
    r9: '0x2b',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x15a419a2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x2b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x39',
    r8: '0x1',
    r9: '0x2a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xab6f7c97',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x2a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x3a',
    r8: '0x2',
    r9: '0x28',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc1139639',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x28',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x3b',
    r8: '0x3',
    r9: '0x28',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x15a419a2',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x28',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc37',
    rsi: '0x7f900effc0ac',
    rdi: '0x3c',
    r8: '0x4',
    r9: '0x20',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x6c8312d0',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x20',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x3d',
    r8: '0x5',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9a19bbd9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x3e',
    r8: '0x6',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc7b064e2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a70c',
    rdi: '0x3f',
    r8: '0x7',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x61ca20bb',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x38',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc37',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x30',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x30',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a70c',
    rdi: '0x40',
    r8: '0x0',
    r9: '0xfc',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x297a859d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xfc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a70c',
    rdi: '0x41',
    r8: '0x1',
    r9: '0xfc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x2d96a909',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xfc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc0ac',
    rdi: '0x42',
    r8: '0x2',
    r9: '0xfe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb4bf2bf5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xfe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc0ac',
    rdi: '0x43',
    r8: '0x3',
    r9: '0xfe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x8b44a658',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xfe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a70c',
    rdi: '0x44',
    r8: '0x4',
    r9: '0xf6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x4003d24d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xf6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc0ac',
    rdi: '0x45',
    r8: '0x5',
    r9: '0xf6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x34c6d08f',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xf6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7f900effc0ac',
    rdi: '0x46',
    r8: '0x6',
    r9: '0xf6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xf4c2fe42',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xf6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a70c',
    rdi: '0x47',
    r8: '0x7',
    r9: '0xb6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x5e509f60',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x40',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc38',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x36',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x48',
    r8: '0x0',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x87da6e31',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x49',
    r8: '0x1',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe62b0d91',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x4a',
    r8: '0x2',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x6e057bc2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x4b',
    r8: '0x3',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x54308953',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x4c',
    r8: '0x4',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc2360515',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x4d',
    r8: '0x5',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x16668e68',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x4e',
    r8: '0x6',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xd89c937d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a70c',
    rdi: '0x4f',
    r8: '0x7',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xef0321e5',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x48',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc39',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x34',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x34',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x50',
    r8: '0x0',
    r9: '0x4',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc79fb562',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x51',
    r8: '0x1',
    r9: '0x5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xb6a2d747',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x52',
    r8: '0x2',
    r9: '0x7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x7e428ca9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x53',
    r8: '0x3',
    r9: '0x3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x34e563f0',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x54',
    r8: '0x4',
    r9: '0x3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xb327f099',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x55',
    r8: '0x5',
    r9: '0x3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe80d5489',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x56',
    r8: '0x6',
    r9: '0x23',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9b354522',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x23',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7ffe2981a70c',
    rdi: '0x57',
    r8: '0x7',
    r9: '0x63',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x2989ced1',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x50',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3a',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x63',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x63',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x58',
    r8: '0x0',
    r9: '0x6f',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1e77decd',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x6f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x59',
    r8: '0x1',
    r9: '0x6f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa1ba7878',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x6f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x5a',
    r8: '0x2',
    r9: '0x6f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc0325745',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x6f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x5b',
    r8: '0x3',
    r9: '0x6b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x61eccfbd',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x6b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x5c',
    r8: '0x4',
    r9: '0x63',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x221f2702',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x63',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x5d',
    r8: '0x5',
    r9: '0x63',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x840bf6bf',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x63',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x5e',
    r8: '0x6',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa62b1dc1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc0ac',
    rdi: '0x5f',
    r8: '0x7',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x2a371480',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x58',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3b',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x43',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x60',
    r8: '0x0',
    r9: '0x4e',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xd0623241',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x4e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x61',
    r8: '0x1',
    r9: '0x4f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xfa9946c1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x4f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x62',
    r8: '0x2',
    r9: '0x4d',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xcafb7902',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x4d',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x63',
    r8: '0x3',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc594bfc3',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x64',
    r8: '0x4',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x909038c5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x65',
    r8: '0x5',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x5624f888',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x49',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x66',
    r8: '0x6',
    r9: '0x69',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe6b5314d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x69',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc0ac',
    rdi: '0x67',
    r8: '0x7',
    r9: '0x69',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x3cda29d5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x60',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3c',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x69',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x69',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x68',
    r8: '0x0',
    r9: '0x12',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x238f5b22',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x12',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x69',
    r8: '0x1',
    r9: '0x13',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x606984f7',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x13',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x6a',
    r8: '0x2',
    r9: '0x13',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x83f8e019',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x13',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x6b',
    r8: '0x3',
    r9: '0x17',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe4626510',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x17',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x6c',
    r8: '0x4',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x685b4529',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x6d',
    r8: '0x5',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4cbdaa39',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x6e',
    r8: '0x6',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb518ef62',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc0ac',
    rdi: '0x6f',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x1d6999b',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x68',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3d',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x5f',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x70',
    r8: '0x0',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb6ef88fd',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x71',
    r8: '0x1',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb8c62298',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x834299ab',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a70c',
    rdi: '0x72',
    r8: '0x2',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x6fb5ab95',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a70c',
    rdi: '0x73',
    r8: '0x3',
    r9: '0x4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x287bce2d',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a70c',
    rdi: '0x74',
    r8: '0x4',
    r9: '0xc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x983179c2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a70c',
    rdi: '0x75',
    r8: '0x5',
    r9: '0xc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc0ad47ef',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x72',
    r8: '0x2',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x6fb5ab95',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x73',
    r8: '0x3',
    r9: '0x6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x287bce2d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x6',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x74',
    r8: '0x4',
    r9: '0xe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x983179c2',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a70c',
    rdi: '0x76',
    r8: '0x6',
    r9: '0x2c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x58dec1b1',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x2c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc3e',
    rsi: '0x7ffe2981a70c',
    rdi: '0x77',
    r8: '0x7',
    r9: '0x6c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x75',
    r8: '0x5',
    r9: '0xe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc0ad47ef',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xe',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x76',
    r8: '0x6',
    r9: '0x2e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x58dec1b1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x2e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc0ac',
    rdi: '0x77',
    r8: '0x7',
    r9: '0x6e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x198c09a0',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x70',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3e',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x6e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x6e',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x78',
    r8: '0x0',
    r9: '0x50',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x726acb51',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x50',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x79',
    r8: '0x1',
    r9: '0x51',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x8bf6d4f1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x51',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x7a',
    r8: '0x2',
    r9: '0x51',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xfe61a042',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x51',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x7b',
    r8: '0x3',
    r9: '0x55',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x8a587533',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x55',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x7c',
    r8: '0x4',
    r9: '0x55',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x88ba1575',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x55',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x7d',
    r8: '0x5',
    r9: '0x55',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x13128aa8',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x55',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x7e',
    r8: '0x6',
    r9: '0x75',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9bcca01d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x75',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc0ac',
    rdi: '0x7f',
    r8: '0x7',
    r9: '0x75',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xaedf2ac5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x78',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc3f',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x75',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x75',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x80',
    r8: '0x0',
    r9: '0xa9',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4aabcae2',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xa9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x81',
    r8: '0x1',
    r9: '0xa9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xf98af5a7',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xa9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x82',
    r8: '0x2',
    r9: '0xa9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4436c089',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xa9',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x83',
    r8: '0x3',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x3dc1b630',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x84',
    r8: '0x4',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x81f876b9',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x85',
    r8: '0x5',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xbfba2ce9',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x86',
    r8: '0x6',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x41b2a3a2',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xad',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc0ac',
    rdi: '0x87',
    r8: '0x7',
    r9: '0xed',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x16cd08b',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x80',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc40',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xed',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x6d',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x88',
    r8: '0x0',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x431f742d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x89',
    r8: '0x1',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x448c44b8',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x8a',
    r8: '0x2',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x87abb8e5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x8b',
    r8: '0x3',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xcc37fd9d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x8c',
    r8: '0x4',
    r9: '0xa',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x53e3b682',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xa',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x8d',
    r8: '0x5',
    r9: '0x1a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x201bb41f',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x1a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x8e',
    r8: '0x6',
    r9: '0x1a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x73ff6aa1',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x1a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc0ac',
    rdi: '0x8f',
    r8: '0x7',
    r9: '0x5a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x941b1ec0',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x88',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc41',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x5a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x5a',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x90',
    r8: '0x0',
    r9: '0x3a',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x81a8961',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x3a',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x91',
    r8: '0x1',
    r9: '0x3b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9c35a821',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x3b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x92',
    r8: '0x2',
    r9: '0x3b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa4503182',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x3b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x93',
    r8: '0x3',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4085d9a3',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x94',
    r8: '0x4',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe4d60b25',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x95',
    r8: '0x5',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x255be4c8',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x198c09a0',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc42',
    rsi: '0x7ffe2981a70c',
    rdi: '0x96',
    r8: '0x6',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xa31efed',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc42',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x3f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc42',
    rsi: '0x7ffe2981a70c',
    rdi: '0x97',
    r8: '0x7',
    r9: '0x7f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x2f8dd4b5',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc42',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x7f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x7f',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x98',
    r8: '0x0',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x39bfc4a2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x99',
    r8: '0x1',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x694d9957',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x9a',
    r8: '0x2',
    r9: '0xb8',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xa30d5df9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xb8',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x9b',
    r8: '0x3',
    r9: '0xbc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc5af750',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xbc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x9c',
    r8: '0x4',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xaf685549',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x9d',
    r8: '0x5',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xbbc34c99',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x9e',
    r8: '0x6',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x6b2ba1e2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a70c',
    rdi: '0x9f',
    r8: '0x7',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x26eeee7b',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc43',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x34',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa0',
    r8: '0x0',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x921a905d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa1',
    r8: '0x1',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xb9097ed8',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa2',
    r8: '0x2',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x4b240f35',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa3',
    r8: '0x3',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x42d8e0d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa4',
    r8: '0x4',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x4f519d42',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x96',
    r8: '0x6',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa31efed',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x1f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc0ac',
    rdi: '0x97',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x2f8dd4b5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x90',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc42',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x5f',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x98',
    r8: '0x0',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x39bfc4a2',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x99',
    r8: '0x1',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x694d9957',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xba',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x9a',
    r8: '0x2',
    r9: '0xb8',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa30d5df9',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xb8',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x9b',
    r8: '0x3',
    r9: '0xbc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc5af750',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xbc',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x9c',
    r8: '0x4',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xaf685549',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x9d',
    r8: '0x5',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xbbc34c99',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x9e',
    r8: '0x6',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x6b2ba1e2',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc0ac',
    rdi: '0x9f',
    r8: '0x7',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x26eeee7b',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0x98',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc43',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x34',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa0',
    r8: '0x0',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x921a905d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa1',
    r8: '0x1',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb9097ed8',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa2',
    r8: '0x2',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4b240f35',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa3',
    r8: '0x3',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x42d8e0d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa4',
    r8: '0x4',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4f519d42',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xc2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa5',
    r8: '0x5',
    r9: '0xd2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x537f2b4f',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xd2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa6',
    r8: '0x6',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xa2d0c891',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc0ac',
    rdi: '0xa7',
    r8: '0x7',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xf64ff3e0',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc44',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x72',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xa8',
    r8: '0x0',
    r9: '0x8e',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9920bc71',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x8e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xa9',
    r8: '0x1',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x8f70b051',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xaa',
    r8: '0x2',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x28916cc2',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xab',
    r8: '0x3',
    r9: '0x8b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xb8021d13',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x8b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xac',
    r8: '0x4',
    r9: '0x83',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe09389d5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x83',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xad',
    r8: '0x5',
    r9: '0x93',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9895a6e8',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x93',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xae',
    r8: '0x6',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x792930bd',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc0ac',
    rdi: '0xaf',
    r8: '0x7',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x11bed7a5',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc45',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x33',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb0',
    r8: '0x0',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x8ae80862',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb1',
    r8: '0x1',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9ca6e007',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb2',
    r8: '0x2',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x278ee869',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb3',
    r8: '0x3',
    r9: '0x47',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc435c870',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x47',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb4',
    r8: '0x4',
    r9: '0x4f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xebc4b0d9',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x4f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb5',
    r8: '0x5',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xaffa7949',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb6',
    r8: '0x6',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9bbf2a22',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc0ac',
    rdi: '0xb7',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4bb9a36b',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc46',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x5f',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc47',
    rsi: '0x7f900effc0ac',
    rdi: '0xb8',
    r8: '0x0',
    r9: '0x99',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa5',
    r8: '0x5',
    r9: '0xd2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x537f2b4f',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xd2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa6',
    r8: '0x6',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xa2d0c891',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa7',
    r8: '0x7',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xf64ff3e0',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc44',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xf2',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x72',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa8',
    r8: '0x0',
    r9: '0x8e',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9920bc71',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x8e',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xa9',
    r8: '0x1',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x8f70b051',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xaa',
    r8: '0x2',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x28916cc2',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x8f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xab',
    r8: '0x3',
    r9: '0x8b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xb8021d13',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x8b',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xac',
    r8: '0x4',
    r9: '0x83',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe09389d5',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x83',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xad',
    r8: '0x5',
    r9: '0x93',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9895a6e8',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x93',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xae',
    r8: '0x6',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x792930bd',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a70c',
    rdi: '0xaf',
    r8: '0x7',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x11bed7a5',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xa8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc45',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb3',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x33',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb0',
    r8: '0x0',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x8ae80862',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb1',
    r8: '0x1',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9ca6e007',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x41',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb2',
    r8: '0x2',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x278ee869',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x43',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb3',
    r8: '0x3',
    r9: '0x47',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc435c870',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x47',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb4',
    r8: '0x4',
    r9: '0x4f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xebc4b0d9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x4f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb5',
    r8: '0x5',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xaffa7949',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb6',
    r8: '0x6',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9bbf2a22',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb7',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x4bb9a36b',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc46',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0x5f',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x5f',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb8',
    r8: '0x0',
    r9: '0x99',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe778cd8d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x99',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xb9',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x333270f8',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xba',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x1aab3e85',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xbb',
    r8: '0x3',
    r9: '0x9c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x4dddaf7d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x9c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xbc',
    r8: '0x4',
    r9: '0x94',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x6888ee02',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x94',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xbd',
    r8: '0x5',
    r9: '0x94',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xb6669d7f',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x94',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xbe',
    r8: '0x6',
    r9: '0x94',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x1eef8b81',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0x94',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x40',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a70c',
    rdi: '0xbf',
    r8: '0x7',
    r9: '0xd4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe778cd8d',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xd4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xd5562900',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xb8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc47',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xd4',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x54',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc0',
    r8: '0x0',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xf445b481',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc1',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc99bdd81',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc2',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xbde19202',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc3',
    r8: '0x3',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x877d6f83',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc4',
    r8: '0x4',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x455f0185',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc5',
    r8: '0x5',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xccdc7108',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc6',
    r8: '0x6',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x123b728d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc7',
    r8: '0x7',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xdf17e395',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x30',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc8',
    r8: '0x0',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x54',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc0',
    r8: '0x0',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xf445b481',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc1',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc99bdd81',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xf1535622',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc2',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xbde19202',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc2',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xbde19202',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc3',
    r8: '0x3',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc3',
    r8: '0x3',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x877d6f83',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x877d6f83',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x98',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc4',
    r8: '0x4',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc4',
    r8: '0x4',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x455f0185',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x455f0185',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc5',
    r8: '0x5',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{ type: 'send', payload: '0x0 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc5',
    r8: '0x5',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xccdc7108',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xccdc7108',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0x90',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc6',
    r8: '0x6',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x123b728d',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc0ac',
    rdi: '0xc7',
    r8: '0x7',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xdf17e395',
    rcx: '0x2229',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc48',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x30',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xc8',
    r8: '0x0',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xf1535622',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc6',
    r8: '0x6',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x123b728d',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc7',
    r8: '0x7',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xdf17e395',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc48',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xb0',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x30',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc8',
    r8: '0x0',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xf1535622',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xc9',
    r8: '0x1',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xd06b39b7',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xca',
    r8: '0x2',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc1be8fd9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcb',
    r8: '0x3',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9229c990',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcc',
    r8: '0x4',
    r9: '0xff',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x53e85969',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xff',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcd',
    r8: '0x5',
    r9: '0xef',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{ type: 'send', payload: '0x0 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xc9',
    r8: '0x1',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xd06b39b7',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe61222f9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x1',
    r9: '0xf5',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xca',
    r8: '0x2',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xc1be8fd9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcb',
    r8: '0x3',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x9229c990',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x2',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xca',
    r8: '0x2',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xc1be8fd9',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x2',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcc',
    r8: '0x4',
    r9: '0xff',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x53e85969',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xff',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcd',
    r8: '0x5',
    r9: '0xef',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xe61222f9',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xef',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xce',
    r8: '0x6',
    r9: '0xcf',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xcb',
    r8: '0x3',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x9229c990',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0xf7',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x8',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xcc',
    r8: '0x4',
    r9: '0xff',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x53e85969',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x4',
    r9: '0xff',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x4' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x10',
    rcx: '0x4',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xcd',
    r8: '0x5',
    r9: '0xef',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0xe61222f9',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x5',
    r9: '0xef',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x5' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x20',
    rcx: '0x5',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc0ac',
    rdi: '0xce',
    r8: '0x6',
    r9: '0xcf',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x39fa7c62',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x6',
    r9: '0xcf',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x6' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x0',
    rcx: '0x6',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7ffe2981a70c',
    rdi: '0xcf',
    r8: '0x7',
    r9: '0xcf',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x39fa7c62',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xc8',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc49',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x7',
    r9: '0xcf',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x7' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0xcf',
    rcx: '0x7f9016a91f9f',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc4a',
    rsi: '0x7f900effc0ac',
    rdi: '0xd0',
    r8: '0x0',
    r9: '0x8d',
    r10: '0x7f9015978388',
    r11: '0x293',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x200c9f5b',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc4a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x0',
    r9: '0x8d',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x0' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x1',
    rcx: '0x0',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc4a',
    rsi: '0x7ffe2981a70c',
    rdi: '0xd1',
    r8: '0x1',
    r9: '0x8c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0x5a071bbd',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc4a',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x1',
    r9: '0x8c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x1' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x1',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc4a',
    rsi: '0x7f900effc0ac',
    rdi: '0xd2',
    r8: '0x2',
    r9: '0x8c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x7a13bb18',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc4a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x2',
    r9: '0x8c',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x1 0x2' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7ffe2981a700',
    rax: '0x4',
    rcx: '0x2',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc4a',
    rsi: '0x7ffe2981a70c',
    rdi: '0xd3',
    r8: '0x3',
    r9: '0x88',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7ffe2981a700',
    rax: '0xd41ad6d5',
    rcx: '0x7f9016b7de79',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7ffe2981a700',
    rbp: '0x7f901585fc4a',
    rsi: '0x7f900effc070',
    rdi: '0x0',
    r8: '0x3',
    r9: '0x88',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400531'
  }
}
{ type: 'send', payload: '0x0 0x3' }
{
  type: 'send',
  payload: {
    pc: '0x400524',
    sp: '0x7f900effc0a0',
    rax: '0x0',
    rcx: '0x3',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc4a',
    rsi: '0x7f900effc0ac',
    rdi: '0xd4',
    r8: '0x4',
    r9: '0x88',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x6',
    r15: '0x7f901586d078',
    rip: '0x400524'
  }
}
{
  type: 'send',
  payload: {
    pc: '0x400531',
    sp: '0x7f900effc0a0',
    rax: '0x4e2e91ed',
    rcx: '0x2213',
    rdx: '0x1',
    rbx: '0xd0',
    rsp: '0x7f900effc0a0',
    rbp: '0x7f901585fc4a',
    rsi: '0x7ffe2981a6d0',
    rdi: '0x0',
    r8: '0x4',
    r9: '0x88',
    r10: '0x7f9015978388',
    r11: '0x7f9015978358',
    r12: '0x0',
    r13: '0x0',
    r14: '0x0',
    r15: '0x0',
    rip: '0x400531'
  }
}
