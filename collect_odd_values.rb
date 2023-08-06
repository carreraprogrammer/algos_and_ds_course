def collect_odd_values(arr)
  result = []

  def odd_collector(collection, result)
    if collection.empty?
      return
    end

    if collection[0] % 2 != 0
      result << collection[0]
    end

    odd_collector(collection.slice(1, collection.length), result)
  end

  odd_collector(arr, result)
  result
end

p collect_odd_values([1, 2, 3, 4, 5, 6, 7, 8, 9])