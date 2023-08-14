# Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

def stringfy_numbers( obj )
  obj.each do | key, value |
    if (value.is_a? Integer)
      obj[key] = value.to_s
    elsif (value.is_a? Object)
      stringfy_numbers(obj[key])
    end
  end

  obj
end

p stringfy_numbers({ 'one' => 1, "two" => { "nested" => 2}})