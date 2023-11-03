def valid_anagram(str1, str2)
  arr1 = str1.split('')
  arr2 = str2.split('')
  lookup = Hash.new(0)

  arr1.each do |l|
    lookup[l] += 1
  end

  for l in arr2
    return false if lookup[l] <= 0;
    lookup[l] -= 1
  end
  
  true
end

puts valid_anagram('', '') # => true
puts valid_anagram('aaz', 'zza') # => false
puts valid_anagram('anagram', 'nagaram') # => true
puts valid_anagram("rat","car") # => false
puts valid_anagram('awesome', 'awesom') # => false
puts valid_anagram('qwerty', 'qeywrt') # => true
puts valid_anagram('texttwisttime', 'timetwisttext') # => true
