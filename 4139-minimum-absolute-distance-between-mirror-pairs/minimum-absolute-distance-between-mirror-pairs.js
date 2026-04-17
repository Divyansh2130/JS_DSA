/**
 * @param {number[]} nums
 * @return {number}
 */

function removeBothZero(str){
     return str.replace(/^0+|0+$/g, '') || '0';
}
function reverseString(str) {
 return str.split('').reverse().join('');
}
var minMirrorPairDistance = function(nums) {
    let arr= new Map();
    let minDist=Number.MAX_SAFE_INTEGER
    for(let i=0;i<nums.length;i++){
        let curStr=removeBothZero(nums[i].toString());
        
        let rev=reverseString(nums[i].toString());
        
        if(arr.has(rev)){
            minDist=Math.min(minDist,i-arr.get(rev));

        }
        arr.set(curStr,i);
    }
    if(minDist==Number.MAX_SAFE_INTEGER)return -1;
    return minDist;
};