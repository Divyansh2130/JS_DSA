/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {

    let minDist=words.length+1;
    let n=words.length;
    for(let i=0;i<words.length;i++){
        if(words[i]==target){
                let curDist=Math.min(Math.abs(startIndex-i),n-Math.abs(startIndex-i))
                minDist=Math.min(minDist,curDist);
           
        }
    }

    if(minDist==words.length+1)return -1;
    return minDist;
};