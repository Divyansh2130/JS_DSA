/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    
    for(let i=0;i<queries.length;i++){
        let j=queries[i][0];
        while(j<=queries[i][1]){
            nums[j]=(nums[j] * queries[i][3]) % (1e9 + 7);
            j+=queries[i][2];
        }
    }

    let res=nums[0];
    for(let i=1;i<nums.length;i++){
        res^=nums[i];
    }

    return res;
};