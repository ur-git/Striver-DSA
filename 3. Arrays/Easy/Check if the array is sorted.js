function sample(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(sample([1, 2, 1, 3, 4])); //false
console.log(sample([1, 2, 2, 3, 3, 4])); //true
