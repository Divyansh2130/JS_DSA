/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let pivot:number=-1;
    
    for(let i:number=nums.length-2;i>=0;i--){
      if(nums[i]<nums[i+1]){pivot=i;break;}
    }
    console.log(pivot);
    if(pivot===-1){
        nums.reverse();
        return;
    }
    let next_pivot:number=pivot+1;
    for(let i:number=pivot+2;i<nums.length;i++){
        if(nums[i]>nums[pivot] && nums[i]<=nums[next_pivot]){
            next_pivot=i;
        }
    }

    [nums[pivot],nums[next_pivot]]=[nums[next_pivot],nums[pivot]];
     
    let l=pivot+1;
    let r=nums.length-1;
    while(l<r){
        [nums[l],nums[r]]=[nums[r],nums[l]];
        l++;r--;
    }
};