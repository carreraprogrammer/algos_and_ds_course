=begin 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 
=end

def average_pair (arr, num)
  left_pointer = 0;
  end_pointer = arr.length - 1

  while left_pointer < end_pointer do
    avg = (arr[left_pointer] + arr[end_pointer]) / 2
    if avg == num
      return true
    elsif avg > num
      end_pointer -= 1
    else
      left_pointer += 1
    end
  end

  return false
end


p average_pair([1,2,3,4], 3) # true
p average_pair([1,3,3,5,6,7,10,12,19],8) # true
p average_pair([-1,0,3,4,5,6], 4.1) # false
p average_pair([], 2) # false