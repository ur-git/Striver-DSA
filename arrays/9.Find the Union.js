function sample(arr1, arr2) {
  let freq = {};
  let union = [];
  let arr = [...arr1, ...arr2];

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (!freq[n]) {
      freq[n] = n;
      union.push(n);
    }
  }

  return union;
}

console.log(sample([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6])); //1,2,3,4,5,6
