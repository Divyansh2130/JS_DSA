/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let flag=false;
    for(let i=0;i<s.length;i++){
        if(s[i]=='b'){
            flag=true;
        }
        if(s[i]=='a'){
            if(flag)return false;
        }
    }

    return true;
};