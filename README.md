# Striver DSA

## Arrays

- [Tutorials](https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB)

- [Dutch National Flag Algorithm](https://www.youtube.com/watch?v=tp8JIuCXBaU&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB&index=6)

- [Moore's Voting Algorithm](https://www.youtube.com/watch?v=nP_ns3uSh80&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB&index=7)

## Two Pointers & Sliding Window

### Constant Window Pattern

Steps to Solve

1. **Initialize Window**

   - `L = 0`, `R = k-1`
   - Compute sum of first window (from index `0` to `k-1`).

2. **Slide the Window**

   - For each step:

     - **Remove** the element at `L` (`sum -= arr[L]`).
     - Increment `L`.
     - Increment `R`.
     - **Add** the new element at `R` (`sum += arr[R]`).

   - Update maximum sum:
     `maxSum = max(maxSum, sum)`

3. **Stop Condition**

   - Continue until `R` reaches the end of the array.

4. **Pseudocode**

   ```
   L = 0
   R = k-1
   sum = sum of arr[0..k-1]
   maxSum = sum

   while R < n-1:
       sum = sum - arr[L]
       L = L + 1
       R = R + 1
       sum = sum + arr[R]
       maxSum = max(maxSum, sum)

   return maxSum
   ```

---

### Longest Substring/Subarray where <condition>

### Number of Substrings/Subarrays where <condition>
