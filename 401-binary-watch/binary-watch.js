/**
 * @param {number} turnedOn
 * @return {string[]}
 */

function calculateBit(i){
    let res=0;
    while(i>0){
        res+=i%2;
        i=Math.floor(i/2);
    }
    return res;
}
var readBinaryWatch = function(turnedOn) {
    if(turnedOn>=9)return [];
    const res=[];
    for(let i=0;i<12;i++){
        for(let j=0;j<60;j++){
            let minBit=calculateBit(j);
            let hrsBit=calculateBit(i);
            // console.log(minBit);
            // console.log(hrsBit);
            if(minBit+hrsBit==turnedOn){
               let result=String(i)+":"+((String(j).length!=1)?String(j):"0"+String(j));
               res.push(result);
            }
        }
    }

    return res;

};