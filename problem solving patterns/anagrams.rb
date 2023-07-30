def valid_anagram(str1, str2)
  arr1 = str1.split('')
  arr2 = str2.split('')
  frequency_arr_1 = Hash.new(0)
  frequency_arr_2 = Hash.new(0)

  if arr1.length != arr2.length
    return false
  end

  arr1.each do | letter |
    frequency_arr_1[letter] += 1
  end

  arr2.each do | letter |
    frequency_arr_2[letter] += 1
  end
  
  frequency_arr_1.each do | key, frequency |
    if frequency_arr_2[key] == nil
      return false
    elsif frequency_arr_2[key] != frequency_arr_1[key]
      return false
    end
  end
  
  return true
end

puts valid_anagram('', '') # => true
puts valid_anagram('aaz', 'zza') # => false
puts valid_anagram('anagram', 'nagaram') # => true
puts valid_anagram("rat","car") # => false
puts valid_anagram('awesome', 'awesom') # => false
puts valid_anagram('qwerty', 'qeywrt') # => true
puts valid_anagram('texttwisttime', 'timetwisttext') # => true

def refactorize_valid_anagram(str1, str2)

  return false if str1.length != str2.length

  lookup = Hash.new(0)

  str1.each_char do |letter|
    lookup[letter] += 1
  end

  str2.each_char do |letter|
    return false if lookup[letter] <= 0

    lookup[letter] -= 1
  end

  return true
end

puts refactorize_valid_anagram('hello', 'lloje')