function convert(s: string, numRows: number): string {
    if(numRows<=1)return s;
    let matrix:Array<string>=new Array(numRows).fill("");
    let directions=-1;
    let curr=0;
    for(let i=0;i<s.length;i++){
        matrix[curr]+=s[i];

        if(curr==0 || curr==numRows-1){
            directions*=-1;

        }

        curr+=directions;
    }
    let res="";
    console.log(matrix);
    for(let str of matrix){
        res+=str;
    }

    return res;
};