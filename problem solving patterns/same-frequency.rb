=begin /* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
  Your solution MUST have the following complexities: */
=end

def same_frequency(num1, num2)
  array1 = num1.to_s.split('').map(&:to_i)
  array2 = num2.to_s.split('').map(&:to_i)
  frequency = Hash.new(0)

  return false unless array1.length == array2.length

  array1.each do |num|
    frequency[num] += 1
  end

  array2.each do |num|
    if frequency[num] == 0
      return false
    else
      frequency[num] -= 1
    end
  end

  return true
end

p same_frequency(1234, 1332)
