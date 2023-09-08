def bubble_sort(arr)
  n = arr.length

  (0...n - 1).each do |i|
    (0...n - i - 1).each do |j|
      if arr[j] > arr[j + 1]
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
      end
    end
  end

  arr
end

p bubble_sort([1, 4, 3, 2, 5])