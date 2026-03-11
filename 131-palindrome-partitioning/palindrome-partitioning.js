/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(str,left,right){ 
    
  while (left < right) {

    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
let result=[];
function backtrack(start,path,s){
        if(start==s.length){
            console.log(path);
            result.push([...path]);
            return;
        }

        for(let end=start+1;end<=s.length;end++){
            if(isPalindrome(s,start,end-1)){
               
                path.push(s.substring(start,end));
                backtrack(end,path,s);
                path.pop();
            
            }
        }
       
}

var partition = function(s) {
    result=[];
    let path=[];
    backtrack(0,path,s)
    return result;
};

