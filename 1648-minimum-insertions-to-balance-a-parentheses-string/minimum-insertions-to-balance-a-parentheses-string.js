/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const stack=[];
    let res=0;
    
    for(let i=0;i<s.length;i++){

        if(s[i]===')'){
            if(i===s.length-1){
                res++;
                if(stack.length){
                    stack.pop();
                }else{
                    res++;
                }
                continue;
            }else if(s[i+1]=='(' && !stack.length){
                res+=2;
            }
            else if(s[i+1]=='('){
                res++;
                stack.pop();
            }else if(s[i+1]==')' && !stack.length){
                res++;
                i++;
                continue;
            }
            else if(s[i+1]==')' && stack.length){
                stack.pop();
                i++;
                continue;
            }
        }
        if(s[i]=='(' && i==s.length-1){
          res+=2; 
          continue;
        }
        if(s[i]=='('){
            stack.push(s[i]);
        }
    }

    res+=2*stack.length;

    return res;


};