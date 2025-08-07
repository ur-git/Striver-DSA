//brute-force method
function sample(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 0) {
      return i;
    }
  }
}

//better method
function sample(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    freq[n] = (freq[n] || 0) + 1;
  }

  for (key in freq) {
    if (freq[key] === 1) {
      return key;
    }
  }

  return -1;
}

console.log(sample([1, 1, 2, 3, 3, 4, 4])); //2
