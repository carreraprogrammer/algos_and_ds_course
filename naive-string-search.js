let naiveSearch= (longer, short) =>{
  let counter = 0;
  let j = 0
  let i = 0;

  while(j <= longer.length) {
   if(i === short.length) {
    counter ++
    i = 0;
   } 
   if(longer[j] == short[i]) {
    j ++
    i ++
   } else if(longer[j] != short[i]){
    j ++
   }
  }

  return counter;
}

console.log(naiveSearch("loler roler lole", "ole"))// 3