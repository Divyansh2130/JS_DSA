/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    const arr= nums.sort((a,b)=>a-b);

    let min=0;
    let max=0;
    
    let n=arr.length;
    let maxSize=0;
    while(max<arr.length && min<=max){
       if(arr[min]*k>=arr[max]){
        maxSize=Math.max(maxSize,(max-min)+1);
        max++;
       }else{
         min++;
       }
    }

    return n-maxSize; 
};