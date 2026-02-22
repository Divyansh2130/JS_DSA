/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let n=nums.length;
    let red=0;
    let blue=0;
    let white=0;
    for(const num of nums){
        if(num==0)red++;
        else if(num==1)blue++;
        else white++;
    }

    let i=0;
    console.log(red)
    console.log(blue)
    console.log(white)
    
    while((red+blue+white)>0){
        if(red>0){
            nums[i]=0;
            red--;
        }else if(blue>0){
            nums[i]=1;
            blue--;
        }else{
            nums[i]=2;
            white--;
        }
        i++;
    }

};