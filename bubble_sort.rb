def bubble_sort(arr)
  n = arr.length

  while n > 0 do
    n -= 1
    make_switch = false
    
    n.times do | i |
      if arr[i] > arr[i + 1]
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        make_switch = true
      end
    end
    print arr
    break unless make_switch
  end

  arr
end


p bubble_sort([1, 4, 3, 2, 5])