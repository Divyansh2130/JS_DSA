/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let sum=0;
    let n= nums.length;
    let numSum=0;
    for(let i=0;i<n;i++){
        numSum+=nums[i];
        sum+=i*nums[i];
    }
    let res=sum;
    let temp=sum;
    for(let i=n-1;i>0;i--){
        temp+= numSum-(n)*nums[i];
        
        res=Math.max(res,temp);
    }

    return res;
};
// 4 3 2 6  4 3 2 6
// 0 1 2 3  0 3 4 18
// 1 2 3 0  4 6 6 0
// 2 3 0 1  8 9 0 6
// 3 0 1 2  12 0 2 12