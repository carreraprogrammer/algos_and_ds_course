def capitalize_words arr
  return [] if arr.empty?

  capitalize_word = arr[0].upcase

  rest_of_words = capitalize_words(arr[1..-1])

  [capitalize_word] + rest_of_words

end

p capitalize_words(["hello", "bye", "adios"])