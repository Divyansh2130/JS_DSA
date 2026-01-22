function topKFrequent(nums: number[], k: number): number[] {
    const mp = new Map<number,number>();
    const bucket:number[][]=[];
    const result:number[]=[];

    for(let i=0;i<nums.length;i++){
        let freq=mp.get(nums[i])||0;
        mp.set(nums[i],++freq);
    }

    for(const [num,freq] of mp){
        if(!bucket[freq]) bucket[freq]=[];
        bucket[freq].push(num);
    }

    for(let i=bucket.length-1;i>=0 && k>0;i--){
        if(bucket[i]){
            for(const num of bucket[i]){
                result.push(num);
                k--;
                if(k==0)break;
            }
        }
    }

    return result;
};