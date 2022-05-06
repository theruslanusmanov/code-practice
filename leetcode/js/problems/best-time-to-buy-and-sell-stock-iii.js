var maxProfit = function(prices) {
  // Step 1: get me that profit array for 1 buy and sell

  var i, l;
  var Pmin = Infinity;
  var profit1 = [];
  var profitMax = 0;

  for (i = 0, l = prices.length; i < l; i++) {
    if (Pmin > prices[i]) {
      Pmin = prices[i];
    }

    profitMax = Math.max(profitMax, prices[i] - Pmin);
    profit1.push(profitMax);
  }

  // Step 2: do the same, but different (ha!) : we loop backwards and keep track of
  // pmax now. Note the unshift vs push above

  var Pmax = -Infinity;
  var profit2 = [];
  var profitMax2 = 0;

  for (i = prices.length - 1; i > -1; i--) {
    if (Pmax < prices[i]) {
      Pmax = prices[i];
    }

    profitMax2 = Math.max(profitMax2, Pmax - prices[i]);
    profit2.unshift(profitMax2);
  }

  // little trick to help with out of bounds looping in step 3
  profit2.push(0);

  // verify our work
  // console.log('profit1', profit1);
  // console.log('profit2', profit2);

  // Step 3: loop over our profit arrays to find the max:
  var totalProfit = 0;

  for (i = 0, l = profit1.length; i < l; i++) {
    totalProfit = Math.max(totalProfit, profit1[i] + profit2[i+1]);
  }

  return totalProfit;
}
