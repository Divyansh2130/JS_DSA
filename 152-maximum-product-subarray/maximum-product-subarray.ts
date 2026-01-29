function maxProduct(nums: number[]): number {
    let maxL=Number.MIN_SAFE_INTEGER;
    let prodL=1;

    for(let i=0;i<nums.length;i++){
        prodL=prodL*nums[i];
        maxL=Math.max(maxL,prodL); 
        if(prodL===0)prodL=1;
    }
    
    let maxR=Number.MIN_SAFE_INTEGER;
    let prodR=1;
    for(let i=nums.length-1;i>=0;i--){
        prodR=prodR*nums[i];
        maxR=Math.max(maxR,prodR); 
        if(prodR===0)prodR=1;
    }

    return Math.max(maxR,maxL);
};