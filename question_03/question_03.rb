require 'pry'

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

# def is_prime?(number)
#     temp = []
#         (2..Math.sqrt(number)).each do |factor|
#           if number % factor == 0 && number / factor != 1
#             temp.push(number)
#           end
#         end
#     if temp.length == 0
#       return true
#     else
#       return false
#     end

# end

def get_largest_prime_factor(number)
  largest =  0
  start = 1
  while largest == 0

      if number % start == 0 && is_prime?(number / start)
        largest = number / start
      else
        start += 1
      end
  end
  largest
end


puts get_largest_prime_factor(600851475143)
# 6857


