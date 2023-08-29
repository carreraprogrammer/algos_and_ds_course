#begin Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

#Don't use indexOf to implement this function!

def linear_search arr, value
  arr.each_with_index do |num, index|
    if num == value
      return index
    end
  end

  return -1
end

p linear_search([1,2,3], 5)