// multiple of length of array rotations, will always bring you to original array
// Number of rotations will always be - k = k % arrlength

//brute-force method
function sample(arr, k) {
  k = k % arr.length;
  let temp = [];

  //store rotating num into temp
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }

  //shift remianing to left
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i];
  }

  //place back temp
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = temp[i - (arr.length - k)];
  }

  return arr;
}

//optimal method
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function sample(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
}

console.log(sample([1, 2, 3, 4, 5], 2)); //3,4,5,1,2
console.log(sample([1, 2, 3, 4, 5], 6)); //2,3,4,5,1
