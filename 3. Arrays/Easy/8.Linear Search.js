function sample(arr, k) {
  let searchIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      searchIndex = i;
    }
  }

  return searchIndex;
}

console.log(sample([6, 7, 8, 4, 1], 4)); //3
