def capitalize_words arr

  capitalized_arr = []
 
  if arr.length == 0
    return
  end
  
  def capitalize_helper(arr, newArr)

    if arr.length == 0
      return
    end

    capitalized_word = arr[0].upcase
    newArr.push(capitalized_word)

    filtered_arr = arr.slice(1..-1)

    capitalize_helper(filtered_arr, newArr)
  end

  capitalize_helper(arr, capitalized_arr)

  return capitalized_arr
end

p capitalize_words(["hello", "bye", "adios"])