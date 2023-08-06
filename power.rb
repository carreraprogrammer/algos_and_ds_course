def power(num, pow)
  if pow == 0
    return 1
  end
  pow -= 1
  return num * power(num, pow)
end

p power(2,0)
p power(2,2)
p power(2,4)