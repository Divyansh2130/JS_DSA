/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let maxD=0;
    for(let i=0;i<colors.length;i++){
        for(let j=0;j<colors.length;j++){
            if(colors[i]!=colors[j])maxD=Math.max(maxD,Math.abs(i-j));
        }
    }

    return maxD;
}