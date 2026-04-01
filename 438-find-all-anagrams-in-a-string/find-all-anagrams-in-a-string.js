/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


var findAnagrams = function(s, p) {

    if(s.length<p.length)return [];
    let hashP=new Array(26).fill(0);

    for(let ch of p){
        hashP[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }

    let hashStringP=hashP.join('');

    let hashS=new Array(26).fill(0);

    for(let i=0;i<p.length;i++){
        hashS[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    
    let hashStringS=hashS.join('');
    let res=[];
    if(hashStringS===hashStringP){
        res.push(0);
    }

    let left=0;
    for(let i=p.length;i<s.length;i++){
        hashS[s[left++].charCodeAt(0)-'a'.charCodeAt(0)]--;
        hashS[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
        hashStringS=hashS.join('');
        console.log(hashStringS);
        if(hashStringS===hashStringP){
            res.push(left);
        }
    }

    return res;
    
};