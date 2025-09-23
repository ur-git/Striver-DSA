//brute-force
function sample(str) {
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let hash = {}; // reset for each new starting index

    for (let j = i; j < str.length; j++) {
      if (hash[str[j]]) {
        break; // found duplicate → stop this substring
      }

      hash[str[j]] = true; // mark character as seen
      let l = j - i + 1;
      if (l > max) {
        max = l;
      }
    }
  }

  return max;
}

//optimal
function sample(str) {
  let hash = {}; // store char -> last seen index
  let left = 0;
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    let char = str[right];

    // If char seen before and its index is inside current window
    if (hash[char] !== undefined && hash[char] >= left) {
      left = hash[char] + 1; // move left pointer
    }

    // Update char's last seen index
    hash[char] = right;

    // Calculate window length
    let len = right - left + 1;
    if (len > max) {
      max = len;
    }
  }

  return max;
}

console.log(sample("abcabcbb")); // 3 ("abc")
console.log(sample("bbbbb")); // 1 ("b")
console.log(sample("pwwkew")); // 3 ("wke")
