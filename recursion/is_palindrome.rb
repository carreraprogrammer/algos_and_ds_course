def palindrome? (str)
  
  def reverse(str)
    if str.length == 1
      return str
    end

    last_letter = str[str.length - 1]
    new_string = str.split('').slice(0, str.length - 1).join('')

    last_letter + reverse(new_string)
  end
  

  str == reverse(str)  
end


p palindrome?('heh')