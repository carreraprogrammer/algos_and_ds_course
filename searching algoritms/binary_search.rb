def binary_search (arr, value)
  left_pointer = 0
  right_pointer = arr.length - 1

  while(left_pointer <= right_pointer)
    middle = (left_pointer + right_pointer) / 2
    if arr[middle] < value
      left_pointer = middle + 1
    elsif arr[middle] > value
      right_pointer = middle - 1
    else arr[middle] == value
      return middle
    end
  end

  return -1
end

p binary_search([1,2,3,4,5], 7)
