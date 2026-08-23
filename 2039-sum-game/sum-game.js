var sumGame = function(num) {

    const n = num.length;
    let diff = 0.0;
    
    for (let i = 0; i < n / 2; i++) {
        diff += num[i] === '?' ? 4.5 : Number(num[i]);
    }
    
    for (let i = n / 2; i < n; i++) {
        diff -= num[i] === '?' ? 4.5 : Number(num[i]);
    }
    
    return diff !== 0.0;
};