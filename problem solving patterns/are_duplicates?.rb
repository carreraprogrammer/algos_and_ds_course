def are_duplicates?(*args)
  args.sort!

  pointerLeft = 0;
  pointerRight = 1;

  while pointerRight <  args.length do
   if args[pointerLeft] == args[pointerRight]
    return true
   end

   pointerLeft += 1
   pointerRight += 1
  end

  return false

end

p are_duplicates?(1,3,2,4)