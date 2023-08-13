def is_array?(arr, newArr)
  arr.each_with_index do | element, index |
    if !arr[index].kind_of?(Array)
      newArr.push(arr[index])
    else
      is_array?(arr[index], newArr)
    end
  end
end

def flatten(arr)
  newArr = []
  is_array?(arr, newArr)

  newArr
end

p flatten([1, 2, 3, [4, 5] ])
p flatten([1, [2, [3, 4], [[5]]]])
p flatten([[1],[2],[3]])