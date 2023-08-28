let stringSearch= (longer, short) =>{
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

console.log(stringSearch("loler roler lole vola vole llole", "ole"))// 5
console.log(stringSearch("lorie loled", "lol"))

let naiveSearch= (long, short)=>{
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

naiveSearch("lorie loled", "lol")