/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(word) {
    
    let asciiNumber=[];
    for(let char of word){
        asciiNumber.push(char.charCodeAt(0));
    }

    let prev=false;
    let answer=0;
    for(let i=1;i<asciiNumber.length;i++){
        if(prev){
            prev=false;
            continue;
        }
        if(asciiNumber[i]==asciiNumber[i-1] || Math.abs(asciiNumber[i]-asciiNumber[i-1])==1){
            prev=true;
            answer++;
        }
    }

    return answer;
};