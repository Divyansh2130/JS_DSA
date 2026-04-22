/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
class unionFind {

    constructor(n){
        this.rank= new Array(n).fill(0);
        this.parent= new Array(n);

        for(let i=0;i<n;i++){
            this.parent[i]=i;
        }

    }

    find(x){
        if(this.parent[x]!==x){
            this.parent[x]=this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x,y){
        x=this.find(x);
        y=this.find(y);
        if(x==y)return;
        if(this.rank[x]<this.rank[y]){
            this.parent[x]=y;
        }else if(this.rank[x]>this.rank[y]){
            this.parent[y]=x;
        }else{
            this.parent[y]=x;
            this.rank[x]++;
        }
    }

}
var minimumHammingDistance = function(source, target, allowedSwaps) {
    const n= source.length;
    const uf=new unionFind(n);

    for(let [a,b] of allowedSwaps){
        uf.union(a,b);
    }  

    const sets=new Map();  //will store (parent ,map(frequency of each child))

    for(let i=0;i<n;i++){
        const f = uf.find(i);
        if(!sets.has(f)){
            sets.set(f,new Map());
        }

        const cnt= sets.get(f);
        cnt.set(source[i],(cnt.get(source[i])||0)+1);
    }

    let res=0;

    for(let i=0;i<n;i++){
        let f= uf.find(i);
        let cnt= sets.get(f);

        let count= cnt.get(target[i])||0;

        if(count>0){
            cnt.set(target[i],count-1);
        }else{
            res++;
        }

        
    }

    return res;



};