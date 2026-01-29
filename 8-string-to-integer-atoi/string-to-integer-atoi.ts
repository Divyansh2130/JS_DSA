function myAtoi(s: string): number {
    let num=parseInt(s);
    
    if(num>2147483647)num=2147483647;
    else if(num<-2147483648)num=-2147483648;
    return num?num:0;
};