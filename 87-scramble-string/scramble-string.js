/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2, memo = new Map()) {
    if (s1 === s2) return true;
    const key = s1 + "#" + s2;
    if (memo.has(key)) return memo.get(key);

    const n = s1.length;
    let count = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }
    if (count.some(c => c !== 0)) {
        memo.set(key, false);
        return false;
    }

    for (let i = 1; i < n; i++) {
        if ((isScramble(s1.slice(0, i), s2.slice(0, i), memo) && isScramble(s1.slice(i), s2.slice(i), memo)) ||
            (isScramble(s1.slice(0, i), s2.slice(n - i), memo) && isScramble(s1.slice(i), s2.slice(0, n - i), memo))) {
            memo.set(key, true);
            return true;
        }
    }

    memo.set(key, false);
    return false;
};