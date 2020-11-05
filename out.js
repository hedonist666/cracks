{*}_{*} process with PID  11074
{ type: 'send', payload: 'BASE: 0x400000' }
{ type: 'send', payload: 'EXPORTS: ' }
{
  type: 'send',
  payload: [ { type: 'variable', name: 'stdout', address: '0x601038' } ]
}
{ type: 'send', payload: '0x400670' }
{ type: 'send', payload: '0x7fad45a9a2a0' }
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
