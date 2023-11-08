def maxSubarraySum(arr, num)
  max_sum = arr[0...num].sum

  window = max_sum

  arr[num..-1].each_with_index do | num, index|
    window = window - arr[index - num] + num
    max_sum = [max_sum, window].max
  end

  max_sum
end

p maxSubarraySum([1, 2, 3], 2)