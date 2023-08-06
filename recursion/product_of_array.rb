def product_of_array(arr)
  if arr.length == 0
    return 1
  end

  return arr[0] * product_of_array(arr.slice(1, arr.length))
end

p product_of_array([1, 2, 3, 4])