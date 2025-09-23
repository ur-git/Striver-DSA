//subarray - is contiguous part of the arrray

//brute-force method
//1. generate all subarrays
function sample(arr, k) {
  let maxlength = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      let l = j - i + 1;
      if (l > maxlength && sum === k) {
        maxlength = l;
      }
    }
  }

  return maxlength;
}

//better method
function sample(arr, k) {
  let hash = {};
  let sum = 0;
  let maxlength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // Case 1: If total sum so far equals k
    if (sum === k) {
      maxlength = i + 1;
    }

    // Case 2: Check if (sum - k) was seen before
    if (sum - k in hash) {
      let l = i - hash[sum - k];
      maxlength = Math.max(maxlength, l);
    }

    // Store the first occurrence of this prefix sum
    if (!(sum in hash)) {
      hash[sum] = i;
    }
  }

  return maxlength;
}

//optimal method(only for positives)
function sample(arr, k) {
  let sum = 0;
  let maxlength = 0;
  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr.length) {
    sum += arr[j];

    if (sum === k) {
      l = j - i + 1;
      if (l > maxlength) {
        maxlength = l;
      }
    }

    if (sum > k) {
      sum -= arr[i];
      i++;
    }

    j++;
  }

  return maxlength;
}

console.log(sample([1, 2, 3, 1, 1, 1, 4, 2, 3], 3)); //[1,1,1]
