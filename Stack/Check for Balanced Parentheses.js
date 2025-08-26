//1.every opening bracket should have same closing bracket
//2.every closing bracket should have same closing bracket
//3.order should be followed
//4.Balanced - ()[{}()], unbalanced - ()[{}(])
function sample(str) {
  let store = [];
  let obj = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  for (let ch of str) {
    if (ch === "(" || ch === "[" || ch === "{") {
      store.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (store.pop() !== obj[ch]) {
        return false;
      }
    }
  }

  return true;
}

//Note:- In case all brackets are same
function sample(str) {
  let count = 0;

  for (let ch of str) {
    if (ch === "(") count++;
    else if (ch === ")") {
      count--;
      if (count < 0) return false;
    }
  }

  return count === 0;
}

console.log(sample("()")); // true
console.log(sample("()[]{}")); // true
console.log(sample("(]")); // false
console.log(sample("([)]")); // false
console.log(sample("{[]}")); // true
