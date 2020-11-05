#!/usr/bin/env ruby
fn = ARGV[0]
puts fn

File.open(fn) do |f|
  ar = []
  f.each_line do |line|
    if line =~ /{ type: 'send', payload: '(0x\d+) (0x\d+)' }/
      i = $2.to_i 16
      val = $1.to_i 16
      ar << val
      if i == 7
        puts "#{ar}"
        ar = []
      end
    end
  end
end
