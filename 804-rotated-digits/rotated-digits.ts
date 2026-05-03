function rotatedDigits(n: number): number {
    let res=0;
    for(let i=0;i<=n;i++){
        let arr=new Array(5).fill(0);
        let num=i;
        let j=0;
        while(num>0){
            arr[j]=Math.floor(num%10);
            num=Math.floor(num/10);
            j++;
        }

        let flag=false;
        for(let k=0;k<5;k++){
            if(arr[k]==2 ||arr[k]==5|| arr[k]==6|| arr[k]==9){
                flag=true;
            }else if(arr[k]==0 ||arr[k]==1|| arr[k]==8){
                continue;
            }else{
                flag=false;
                break;
            }
        }
        if(flag)res++;
    }

    return res;
};