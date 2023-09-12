def selection_sort(arr)
  (0...arr.length).each do |i|
    lowest = i
    (i + 1...arr.length).each do |j|
      if arr[j] < arr[lowest]
        lowest = j
      end
    end

    if lowest != i
      arr[i], arr[lowest] = arr[lowest], arr[i]
    end
  end
  arr
end

arr = [1, 3, 5, 3, 9, 11, 10]
puts selection_sort(arr)

