def nested_even_sum(obj)
  accumulator = 0

  even_accumulator = lambda do |obj|
    obj.each do |key, value|
      if value.is_a?(Integer) && value.even?
        accumulator += value
      elsif value.is_a?(Hash)
        even_accumulator.call(value)
      end
    end
  end

  even_accumulator.call(obj)
  accumulator
end

obj = {
  num1: 4,
  num2: 3,
  nested: {
    num3: 4
  }
}

puts nested_even_sum(obj) # debería retornar 8
