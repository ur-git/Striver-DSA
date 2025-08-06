function sample(arr1, arr2) {
  let freq = {};
  let intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !freq[arr1[i]]) {
        freq[arr1[i]] = arr1[i];
        intersection.push(arr1[i]);
        break;
      }
      if (arr2[j] > arr1[i]) break;
    }
  }

  return intersection;
}

console.log(sample([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])); //2,3,5,6
