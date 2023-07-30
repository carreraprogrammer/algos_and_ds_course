def sum_zero(arr)
  left = 0
  right = arr.length - 1

  while left < right do
    if arr[left] + arr[right] == 0
      return [arr[left], arr[right]]
    else
      left += 1
      right -= 1
    end
  end
end

p sum_zero([-3,-2,-1,0,1,2,3]) # [-3,3] 
p sum_zero([-2,0,1,3]) # undefined
p sum_zero([1,2,3]) # undefined