/* Best Time to Buy and Sell Stock IV

You are given an integer array prices where prices[i] is the price of a given stock on the ith day,
and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
*/


/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    let dp = [];
    
    for(let i = 0; i <  prices.length; i++){
        let t1 = [];
        for(let i = 0; i <= 1; i++){
            let t2 = [];
            for(let i = 0; i < k; i++){
                t2.push(0);
            }
            t1.push(t2);
        }
        dp.push(t1);
    }
    
    function maxProfit(i, canBuy, t){
        if(i === prices.length || t === 0){
            return 0;
        }
        
        if(dp[i][canBuy][t]){
            return dp[i][canBuy][t];
        }
        
        if(canBuy){
            dp[i][canBuy][t] = Math.max(-prices[i] + maxProfit(i+1, 0, t), maxProfit(i+1,1,t)); 
            return dp[i][canBuy][t];
        }else{
            dp[i][canBuy][t] = Math.max(prices[i] + maxProfit(i+1, 1, t-1), maxProfit(i+1, 0,t));        
            return dp[i][canBuy][t]; 
        }
        
    }
    
    return maxProfit(0,1,k);
};