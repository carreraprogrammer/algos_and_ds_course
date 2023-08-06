def max_subarray_sum(arr, range)
  max_sum = 0
  temp_value = 0
  i = 0

  if arr.length < range
    return nil
  end

  arr.take(range).each do |num|
    temp_value += num
  end

  max_sum = temp_value

  arr.each_with_index do |num, index|
    next if index < range

    temp_value = temp_value - arr[i] + num
    max_sum = [temp_value, max_sum].max

    i += 1
  end

  max_sum
end

p max_subarray_sum([1, 2, 3, 4], 2)
