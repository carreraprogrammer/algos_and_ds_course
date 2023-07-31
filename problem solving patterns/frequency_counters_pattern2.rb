#Create a function called same that returns true if the elements of the first array have each one just ONE cuadratic pair in the second array

def same(arr1, arr2)

  if arr1.length != arr2.length
    return false
  end
  
  frequency_counter = Hash.new(0)
  frequency_counter2 = Hash.new(0)

  arr1.each do | num |
    frequency_counter[num] += 1
  end

  arr2.each do | num |
    frequency_counter2[num] +=1
  end

  frequency_counter.each do | key, frequency|
    if frequency_counter2[key ** 2] == nil
      return false
    elsif frequency_counter[key] != frequency_counter2[key ** 2]
      return false
    end
  end
  
  return true
end

puts same([1, 3, 5, 6], [1, 36, 9, 25])
