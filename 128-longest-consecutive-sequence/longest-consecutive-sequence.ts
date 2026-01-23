function longestConsecutive(nums: number[]): number {
    const set= new Set<number>();
    const hp= new Map<number,number>();
    for(const num of nums){
        set.add(num);
    }

    let global_count=0;
    for(const num of set){
        
        if(set.has(num-1))continue;
        
        let current_count=1;
        let n=num+1;
        while(set.has(n)){
           current_count++;
           n++;
        }

        global_count=Math.max(global_count,current_count);
    }

    return global_count;
};