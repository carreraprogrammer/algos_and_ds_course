def capitalize_helper(arr, new_array)
  if arr.length == 0
    return
  end
  capitalized_word = arr[0].upcase
  filtered_array = arr.slice(1, arr.length - 1)
  new_array.push(capitalized_word)
  capitalize_helper(filtered_array, new_array)
end

def capitalize_words(arr)
  new_array = []

  capitalize_helper(arr, new_array)

  return new_array
end

p capitalize_words(["hello", "bye", "adios"])