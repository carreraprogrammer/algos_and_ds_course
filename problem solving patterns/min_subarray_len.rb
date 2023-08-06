def min_subarray_len(arr, sum)
  start = 0
  last = 0
  acc = 0
  min_length = Float::INFINITY
  

  while start < arr.length do
    if acc < sum && last < arr.length
      acc += arr[last]
      last += 1
    elsif acc >= sum
      min_length = [min_length, last - start].min
      acc = acc - arr[start]
      start += 1
    else
      break
    end
  end

  if min_length == Float::INFINITY
    min_length = 0
  end

  p min_length
end

min_subarray_len([2,3,1,2,4,3], 7) # 2 -> because [4,3] is the smallest subarray
min_subarray_len([2,1,6,5,4], 9) # 2 -> because [5,4] is the smallest subarray
min_subarray_len([3,1,7,11,2,9,8,21,62,33,19], 52) # 1 -> because [62] is greater than 52
min_subarray_len([1,4,16,22,5,7,8,9,10],39) # 3
min_subarray_len([1,4,16,22,5,7,8,9,10],55) # 5
min_subarray_len([4, 3, 3, 8, 1, 2, 3], 11) # 2
min_subarray_len([1,4,16,22,5,7,8,9,10],95) # 0
min_subarray_len([2,3,1,2,4,3], 7) # 2 -> because [4,3] is the smallest subarray
min_subarray_len([2,1,6,5,4], 9) # 2 -> because [5,4] is the smallest subarray
min_subarray_len([3,1,7,11,2,9,8,21,62,33,19], 52) # 1 -> because [62] is greater than 52
min_subarray_len([1,4,16,22,5,7,8,9,10],39) # 3
min_subarray_len([1,4,16,22,5,7,8,9,10],55) # 5
min_subarray_len([4, 3, 3, 8, 1, 2, 3], 11) # 2
min_subarray_len([1,4,16,22,5,7,8,9,10],95) # 0