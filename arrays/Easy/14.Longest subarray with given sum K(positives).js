//subarray - is contiguous part of the arrray

//brute-force method
//1. generate all subarrays
// function sample(arr, k) {
//   let maxlength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];

//       let l = j - i + 1;
//       if (l > maxlength && sum === k) {
//         maxlength = l;
//       }
//     }
//   }

//   return maxlength;
// }

//better method
function sample(arr, k) {
  let hash = {};
  let sum = 0;
  let maxlength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxlength = i + i;
    }

    if (hash[sum - k]) {
      let l = i - hash[sum - k];
      maxlength = Math.max(maxlength, l);
    }

    if (!hash[sum]) {
      hash[sum] = i;
    }
  }

  return maxlength;
}

console.log(sample([1, 2, 3, 1, 1, 1, 4, 2, 3], 3)); //[1,1,1]
