def capitalize_helper (array, new_array)
  if array.length == 0
    return
  end
  new_str =  array[0].capitalize
  new_array.push(new_str)
  array = array.drop(1)
  capitalize_helper(array, new_array)
end


def capitalize_first (array_of_strings)
  new_array = []

  capitalize_helper(array_of_strings, new_array)

  new_array
end

p capitalize_first(["hello", "daniel", "capitalize", "works"])
