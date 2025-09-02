//You are given an array where array[i] is the price of a stock on day i.
//Find the maximum profit you can achieve by choosing one buy day and one sell day (buy before sell).

function sample(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];

    // track the minimum price so far
    if (price < minPrice) {
      minPrice = price;
    }

    // calculate profit if sold today
    let profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

console.log(sample([7, 1, 5, 3, 6, 4])); // 5
console.log(sample([7, 6, 4, 3, 1])); // 0 (no profit possible)
