# I need to create a function that compares two arrays
# If the first array haven't the same frequency that the second array, returns false
# If each element from the first array, have a pair that is equivalent to the element ^ 2, the function returns true
# Else, returns false

def same(arr1, arr2)

  if arr1.length != arr2.length
    return false
  end

  # I need two objects to store the frequency on each array
  frequency_arr1 = Hash.new(0)
  frequency_arr2 = Hash.new(0)
  
  # Use objects to count the frequency of elements
  arr1.each do |element|
    frequency_arr1[element] += 1
  end
  
  arr2.each do |element|
    frequency_arr2[element] += 1
  end

  frequency_arr1.each do |element, frequency|
    if frequency_arr2[element ** 2] == nil
      return false
    elsif frequency_arr2[element ** 2] != frequency_arr1[element]
      return false
    end
  end

  return true
end

puts same([1, 4, 2, 9, 3], [16, 1, 4, 9, 81]) # => true
puts same([2, 3], [4, 6]) # => false
puts same([2, 3], [4, 9, 6]) # => false
puts same([2, 3, 6], [4, 9, 6]) # => false

puts same([], []) # => true (Ambas matrices están vacías, por lo que tienen la misma frecuencia)

puts same([1, 2, 3], [1, 4, 9]) # => true (Cada elemento en la primera matriz tiene un par que es su cuadrado en la segunda matriz)

puts same([1, 2, 2, 3], [1, 4, 4, 9]) # => true (Aunque hay duplicados en ambas matrices, cada elemento tiene un par que es su cuadrado)

puts same([1, 2, 3, 3], [1, 4, 4, 9]) # => false (El elemento 3 en la primera matriz tiene una frecuencia de 2, pero en la segunda matriz solo aparece una vez)

puts same([1, 2, 3], [1, 4, 4, 9]) # => false (El elemento 2 en la primera matriz no tiene un par que sea su cuadrado en la segunda matriz)

puts same([1, 2, 3], [1, 4, 9, 10]) # => false (El elemento 10 en la segunda matriz no tiene un par en la primera matriz)

