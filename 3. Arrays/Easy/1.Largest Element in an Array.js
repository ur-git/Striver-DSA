function sample(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

//built-in
function sample(arr) {
  return Math.max(...arr, arr[0]);
}

console.log(sample([3, 2, 1, 5, 2]));
