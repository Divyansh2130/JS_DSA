/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let index=-1;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]>=nums[i+1])continue;
        index=i;
        break;
    }

    //last permutation just reverse
    if(index===-1){
        nums.reverse();
    }else{
        let j= nums.length-1;
        while(nums[index]>=nums[j]){
            j--;
        }
        [nums[index],nums[j]]=[nums[j],nums[index]];

        let left=index+1;
        right=nums.length-1;
        while(left<right){
            [nums[left],nums[right]]=[nums[right],nums[left]];
            left++;
            right--;
        }
        
    }
};