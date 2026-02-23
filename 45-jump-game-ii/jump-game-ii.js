/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    let dp= new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    const n=nums.length;
    dp[0]=0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=i+nums[i] && j<n;j++){
            dp[j]=Math.min(dp[j],dp[i]+1);
        }
    }

    return dp[n-1];
};