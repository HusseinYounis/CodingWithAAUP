function equalSum(arr) {
//   if (arr.length == 0) return -1;
//   if (arr.length == 1) return 0;
//   if (arr.length == 2) {
//     if (arr[0] == 0 && arr[1] == 0) {
//       return 0;
//     } else {
//       return -1;
//     }
//   }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }

    if (rightSum == leftSum) {
      return i;
    }
  }

  return -1;
}

function en_equalSum(arr)
{
    let totalSum = 0;
    for (let index = 0; index < arr.length; index++) {
        totalSum += arr[index];
        
    }

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let leftSum_ = 0;
        let rightSum_ = 0;
        if(i == 0)
        {
            leftSum_ = 0;
            rightSum_ = totalSum - arr[i];
        }
        else
        {
            leftSum_ = leftSum + arr[i-1];
            rightSum_ = rightSum - arr[i];
        }
        leftSum = leftSum_;
        rightSum = rightSum_;

        if (leftSum_ == rightSum_) {
            return i;
          }
        
    }
    return -1;
}

// console.log(equalSum([])," ...... ", en_equalSum([]));
// console.log(equalSum([1, 3, 5, 2, 2])," ...... ", en_equalSum([1, 3, 5, 2, 2]));
// console.log(equalSum([1, 3, 5, -3, 2])," ...... ", en_equalSum([1, 3, 5, -3, 2]));
// console.log(equalSum([0])," ...... ", en_equalSum([0]));
// console.log(equalSum([0, 0])," ...... ", en_equalSum([0, 0]));
// console.log(equalSum([1, 7])," ...... ", en_equalSum([1, 7]));



var start = performance.now();
console.log(equalSum([1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]));
var timeTaken = performance.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");








