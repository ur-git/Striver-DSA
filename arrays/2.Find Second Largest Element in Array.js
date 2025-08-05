//brute-force
function sample(arr) {
  let max = arr[0];
  let secondMax = -1; //assuming no negative number

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

//optimal
function sample(arr) {
  let max = arr[0];
  let secondMax = -1; //assuming no negative number

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

console.log(sample([3, 2, 1, 5, 2])); //3
console.log(sample([1, 2, 4, 7, 7, 5])); //5
