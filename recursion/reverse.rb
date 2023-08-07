def reverse str
  if str.length == 1
    return str
  end

  last_letter = str[str.length - 1]
  new_str = str.split('').slice(0, str.length - 1).join('')
  
  last_letter + reverse(new_str)
end

p reverse('hello')