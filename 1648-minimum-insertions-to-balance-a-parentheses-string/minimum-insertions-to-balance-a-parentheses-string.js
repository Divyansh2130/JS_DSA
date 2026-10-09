var minInsertions = function(s) {
    let res = 0;
    let need = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (need % 2 === 1) {
                res++;
                need--;
            }
            need += 2;
        } else {
            need--;

            if (need < 0) {
                res++;
                need = 1;
            }
        }
    }

    return res + need;
};