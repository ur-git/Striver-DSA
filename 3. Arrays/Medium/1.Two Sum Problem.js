// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//brute-force method
function sample(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];

      if (sum === k) {
        return [i, j];
      }
    }
  }

  return 0;
}

//optimal method
function sample(arr, k) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let req = k - arr[i];

    if (req in hash) {
      return [hash[req], i];
    } else {
      hash[arr[i]] = i;
    }
  }

  return 0;
}

console.log(sample([2, 7, 11, 15], 9)); //[0,1]
console.log(sample([3, 2, 4], 6)); //[1,2]
console.log(sample([3, 3], 6)); //[0,1]
