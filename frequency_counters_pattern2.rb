#Create a function called same that returns true if the elements of the first array have each one just ONE cuadratic pair in the second array

def same(arr1, arr2)
  frequency_arr_1 = Hash.new(0)
  frequency_arr_2 = Hash.new(0)

  if arr1.length != arr2.length
    return false
  end


  arr1.each do | number |
    frequency_arr_1[number] += 1
  end

  arr2.each do | number |
    frequency_arr_2[number] += 1
  end
  
  frequency_arr_1.each do | number, frequency |
    if frequency_arr_2[number ** 2] == nil
      return false
    elsif frequency_arr_1[number] != frequency_arr_2[number ** 2]
      return false
    end
  end

  return true
end

puts same([1, 3, 5, 6], [1, 36, 8, 25])