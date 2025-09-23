//optimal hash method
function sample(arr) {
  let freq = {};
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] === undefined) {
      freq[num] = num;
      unique.push(num);
    }
  }
  return unique;
}

//built-in js method
function sample(arr) {
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}

console.log(sample([1, 1, 2, 2, 2, 3, 3]));
