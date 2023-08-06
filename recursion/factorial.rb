def factorial(num)
  if num == 0
    return 1
  end

  return num * factorial(num - 1)
end

p factorial(7)