def count_unique_values(arr)
  i = 0
  j = 1

  if arr.length == 0
    return i
  end

  while j < arr.length do
    if arr[i] != arr[j]
      i += 1
      arr[i] = arr[j]
    end
    j += 1
  end

  return i + 1
end

puts count_unique_values([])
puts count_unique_values([1,1,1,1,1,2])
puts count_unique_values([1,2,3,4,4,4,7,7,12,12,13])
