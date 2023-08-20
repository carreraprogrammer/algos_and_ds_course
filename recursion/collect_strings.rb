def collect_strings(object)
  strings_collector = []

  object.each do | key, value |
    if(value.kind_of?(String))
      strings_collector.push(value)
    end
  end

  strings_collector
end

obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

p collect_strings