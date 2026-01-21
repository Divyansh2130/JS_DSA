/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mp=new Map();
    for(let i=0;i<s.length;i++){
        mp.set(s[i],-1);
    }
    
    let left=-1;
    let cans=0;
    var ans=0;
    for(let i=0;i<s.length;i++){
        if(mp.get(s[i])<0){
           cans=i-left;
           ans=Math.max(ans,cans);
           mp.set(s[i],i); 
        }else{
            left=Math.max(left,mp.get(s[i]));
            cans=i-left;
            ans=Math.max(ans,cans);
            mp.set(s[i],i);
        }
    }
    return ans;
};