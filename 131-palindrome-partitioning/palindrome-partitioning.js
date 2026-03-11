/**
 * @param {string} s
 * @return {string[][]}
 */

// function isPalindrome(str,left,right){ 
  
//   while (left < right) {

//     if (str[left] !== str[right]) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// }

let result=[];
function backtrack(start,path,s,dp){
        if(start==s.length){
            console.log(path);
            result.push([...path]);
            return;
        }

        for(let end=start+1;end<=s.length;end++){
            if(dp[start][end-1]){
                path.push(s.substring(start,end));
                backtrack(end,path,s,dp);
                path.pop();
            }
        }
       
}

var partition = function(s) {
    result=[];
    let path=[];

    let dp= Array.from({length:s.length},()=>new Array(s.length).fill(false));
    let n=s.length;
    for(let i=0;i<n;i++){
        dp[i][i]=true;
    }

    for(let length=2;length<=n;length++){
        for(let i=0;i<=n-length;i++){
            let j=i+length-1;
            if(s[i]==s[j] && (length==2 || dp[i+1][j-1])){
                dp[i][j]=true;
            }
        }
    }
    
    backtrack(0,path,s,dp)
    return result;
};

