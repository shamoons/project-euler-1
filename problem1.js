/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function sumOfMultiples(upToNum) {
  let sum = 0

  for(let i = 1; i < upToNum; i++) {
    let tmp3 = i / 3
    let tmp5 = i / 5
    
    if(Number.isInteger(tmp3) || Number.isInteger(tmp5)) {
      sum = sum + i
    }
  }
  return sum
}

const ans = sumOfMultiples(1000)

console.log(ans)