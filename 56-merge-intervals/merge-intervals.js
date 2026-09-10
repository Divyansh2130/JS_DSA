/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans=new Array();
    intervals.sort((a,b)=>a[0]-b[0]);
    ans.push([intervals[0][0],intervals[0][1]]);
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>ans[ans.length-1][1]){
            ans.push(intervals[i]);
        }else{
            let last_int=ans[ans.length-1];
            ans.pop();
            ans.push([last_int[0],intervals[i][1]>last_int[1]?intervals[i][1]:last_int[1]]);    
        }
    }
    return ans;
};