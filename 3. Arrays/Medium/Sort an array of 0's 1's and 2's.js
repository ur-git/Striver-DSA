//brute-force method - use any sorting method
function sample(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }

  return arr;
}

//better-solution
function sample(arr) {
  let c0 = 0,
    c1 = 0,
    c2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c0++;
    }
    if (arr[i] === 1) {
      c1++;
    }
    if (arr[i] === 2) {
      c2++;
    }
  }

  for (i = 0; i < c0; i++) {
    arr[i] = 0;
  }
  for (i = c0; i < c0 + c1; i++) {
    arr[i] = 1;
  }
  for (i = c0 + c1; i < arr.length; i++) {
    arr[i] = 2;
  }

  return arr;
}

console.log(sample([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
