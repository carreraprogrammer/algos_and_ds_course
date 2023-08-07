def fibonnacy(num)
  if num <= 2
    return 1
  end

  return fibonnacy(num - 2) + fibonnacy(num - 1)
end

p fibonnacy(5)