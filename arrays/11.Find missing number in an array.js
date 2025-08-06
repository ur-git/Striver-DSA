// (n * (n+1)) / 2 sum of first n natural numbers
//brute-force
function sample(arr, n) {
  for (let i = 1; i < n; i++) {
    let flag = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      return i;
    }
  }

  return -1;
}

//optimal method
function sample(arr, n) {
  let sum2 = 0;
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
  }

  return sum - sum2;
}

console.log(sample([1, 2, 4, 5], 5)); //3
