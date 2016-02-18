require 'pry'

sum = 0
a = 1
b = 0
c = 0
numbers = (1..1000).to_a


while sum < 1000.0
  numbers.each do |num|
    product = a**2 + num**2
    temp_c = Math.sqrt(product)
    temp_sum = a + num + temp_c
    if temp_sum == 1000.0
      sum = temp_sum
      b = num
      c = temp_c
    end
  end
  puts sum
  if sum != 1000.0
    sum = 0
    a += 1
  end
end

puts a*b*c

