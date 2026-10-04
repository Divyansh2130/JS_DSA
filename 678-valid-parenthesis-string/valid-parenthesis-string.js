/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let min =0;
    let max=0;
    for(let i =0;i<s.length;i++){
        if(s[i]=='('){
             min++;
             max++;
           }else if(s[i]==')'){
                if(min>0){
                    min--;
                }
                if(max<=0)return false;
                max--;
           }else{
                if(min>0){
                  min--;
                }
                max++;
           }
    }

    return !min;

};