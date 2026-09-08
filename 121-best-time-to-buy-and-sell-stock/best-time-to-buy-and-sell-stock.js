/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(nums) {
    let maxProfit=0;
    let min=nums[0];
    let max=nums[0];
    for(let i=1;i<nums.length;i++){
        let profit=nums[i]-min;
        if(profit>maxProfit)maxProfit=profit;
        if(nums[i]<min)min=nums[i];
    }
    return maxProfit;
};