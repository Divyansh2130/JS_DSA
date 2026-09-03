/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
     if(nums1.length==1)return true;
     let flag=nums1[0]%2;
     for(let i=1;i<nums1.length;i++){
        if(nums1[i]%2 !== flag){
            break;
        }
        if(i==nums1.length-1)return true;
     }

     let smallest_odd=Number.MAX_SAFE_INTEGER;
     for(let i=0;i<nums1.length;i++){
        if(nums1[i]%2){
            smallest_odd=Math.min(smallest_odd,nums1[i]);
        }
     } 
     for(let i=0;i<nums1.length;i++){
        if(nums1[i]%2==0 && nums1[i]<smallest_odd){
                return false;
        }
     }  
     return true;
};