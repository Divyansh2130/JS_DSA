function minimumPairRemoval(nums: number[]): number {
    let count:number=0;
    let isAscending:boolean=true;
    while(nums.length>1){
       let sumG=nums[0]+nums[1];
       let sumG_i=0;
       isAscending=true;

       for(let i=0;i<nums.length-1;i++){
        let sumP=nums[i]+nums[i+1];
        if(nums[i]>nums[i+1]){
          isAscending=false;
        }

        if(sumP<sumG){
            sumG=sumP;
            sumG_i=i;
        }
       }

       if(isAscending){
         break;
       }

       count++;
       console.log(sumG);
       nums[sumG_i]=sumG;
       nums.splice(sumG_i+1,1);   
    }

    return count;
};