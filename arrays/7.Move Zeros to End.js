//brute-force method
function sample(arr) {
  let nonZero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZero.push(arr[i]);
    }
  }

  for (let i = 0; i < nonZero.length; i++) {
    arr[i] = nonZero[i];
  }

  for (let i = nonZero.length; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

//optimal method
function sample(arr) {
  let j = -1;

  //find first zero
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }

  return arr;
}

console.log(sample([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
