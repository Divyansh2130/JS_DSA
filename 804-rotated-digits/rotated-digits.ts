function rotatedDigits(n: number): number {
    let count=0;
    let dp= new Array(n).fill(0);
    for(let i=0;i<=n;i++){
        if(i<10){
            if(i == 0 || i == 1 || i == 8) dp[i] = 1;
            else if(i == 2 || i == 5 || i == 6 || i == 9){
                    dp[i] = 2;
                    count++;
            }
            else dp[i] = 0;
        }else{
            let a = dp[Math.floor(i / 10)];
            let b = dp[Math.floor(i % 10)];

            if(a == 1 && b == 1) dp[i] = 1;
            else if(a >= 1 && b >= 1){
                dp[i] = 2;
                count++;
            }
            else dp[i] = 0;
        }
       
    }

    return count;
};