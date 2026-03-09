function candy(ratings: number[]): number {
    const n=ratings.length;
    let res:Array<number>=new Array(n).fill(1);
    
    for(let i=0;i<n;i++){
        if(i!=0){
            //console.log(i);
            if(ratings[i]>ratings[i-1]){
                res[i]=res[i-1]+1;
            }
        }

        if(i!=n-1){
            let cur=i+1;

            while(cur<n && ratings[cur]<ratings[cur-1]){
               cur++; 
            }

            let inc=(cur-1)-i;
            if(res[i]>=1){
                res[i]=Math.max(res[i],1+inc)
                i++;
                inc--;
            }
            for(let j=i;j<cur;j++){
                res[j]+=inc--;
            }
            //console.log(cur);
            i=cur-1;
        }

    }
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=res[i];
    }
    console.log(res);
    
    return ans;
};
