def recursiveRange(num)
  if num == 0
    return 0;
  end

  return num + recursiveRange(num - 1)
end

p recursiveRange(6)