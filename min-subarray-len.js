function minSubArrayLen(nums, sum) {
// [1, 2, 3, 4, 5], 9
//     i     j
// los dos indexes empiezan en la misma posicion
// mi total va a sumar cada numero del arr hasta que total < sum, usando el index end siempre y cuando total sea < sum
// si mi total es >= sum, significa que puedo reducir la brecha y aumentar mi start para buscar un array mas pequeno
// cuando mi total es >= sum, voy a guardar el length en minLen, que es la resta de mi end - start
// este proceso se repite indefinidamente hasta que mi start cubra el arr length
// en cada paso se compara el valor minimo entre mi current minLength y mi nuevo end-start
// Si mi nuevo end-start es menor a mi current minLength, se asignara ese valor a mi current minLength

let start = 0;
let end = 0;
let total = 0;
let minLength = Infinity;

  while(start < nums.length) {
    if(total < sum && end < nums.length) {
      total += nums[end]
      end ++
    } else if(total >= sum) {
      minLength = Math.min(minLength, end-start)
      total = total - nums[start]
      start ++
    } else {
      break
    }
  }

  console.log(minLength === Infinity ? 0 : minLength)
}

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0