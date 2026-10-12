/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   const res=[];

   let recursion= function(i,subset){
     if(i==nums.length){
        res.push(subset);
        return;
     }

     //take
     let take=[...subset,nums[i]];
     recursion(i+1,take);

     //not_take
     recursion(i+1,subset);
   } 

    recursion(0,[]);
   return res;
};