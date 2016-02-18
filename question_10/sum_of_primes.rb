def is_prime?(number)
    if number <= 1
      return false
    else
      (2..Math.sqrt(number)).each do |factor|
        if number % factor == 0
          return false
        end
      end
    end
    return true
end


def sum_of_primes(num)
  sum = 0
  (2..num).each do |number|
    if is_prime?(number)
      sum += number
    end
  end
  sum
end

puts sum_of_primes(2000000)
