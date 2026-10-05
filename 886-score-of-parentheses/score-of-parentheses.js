/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let depth = 0, score = 0;
    for (let i = 0; i < s.length; i++) {
        depth += s[i] === "(" ? 1 : -1;
        if (s[i] === ")" && s[i - 1] === "(") score += 1 << depth;
    }
    return score;
};