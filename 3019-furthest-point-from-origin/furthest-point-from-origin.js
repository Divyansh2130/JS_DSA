/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {

    let l=0,r=0,d=0;
    for(let i=0;i<moves.length;i++){
        if(moves[i]=='L'){
            l++;
        }else if(moves[i]=='R'){
            r++;
        }else{
            d++;
        }
    }

    return Math.max(l,r)+d-Math.min(l,r);
};