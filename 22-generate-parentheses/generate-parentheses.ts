function recursion(n:number,nOpen:number,nClose:number,ans:string[],str:string){
    if(nOpen==n && nClose==n){
        ans.push(str);
        return;
    }

    if(nOpen<n){
        recursion(n,nOpen+1,nClose,ans,str+'(');
    }

    if(nOpen>nClose){
        recursion(n,nOpen,nClose+1,ans,str+')');
    }

}

function generateParenthesis(n: number): string[] {
    const ans:string[]=[];
    recursion(n,0,0,ans,"");

    return ans;

};