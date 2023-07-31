def maxSubarraySum(arr, num)
  max_sum = arr[0...num].sum

  if arr.length < num
    return nil
  end

  current_sum = max_sum

  arr[num..-1].each do |element|
    current_sum = current_sum - arr[0] + element
    max_sum = [current_sum, max_sum].max
    arr.shift
  end

  max_sum
end

p maxSubarraySum([1, 2, 3], 2)