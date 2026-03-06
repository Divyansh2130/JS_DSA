/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let flag=false;
    for(let i=1;i<s.length;i++){
        if(s[i]=='0')flag=true;

        if(flag && s[i]=='1')return false;
    }

    return true;
};