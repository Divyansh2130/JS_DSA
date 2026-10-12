/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = [];
    let n = digits.length;

    let mp = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    if (n === 0) return ans;

    if (n === 1) {
        let d = Number(digits[0]);

        for (let ch of mp[d]) {
            ans.push(ch);
        }
    }

    else if (n === 2) {
        let d1 = Number(digits[0]);
        let d2 = Number(digits[1]);

        for (let ch1 of mp[d1]) {
            for (let ch2 of mp[d2]) {
                ans.push(ch1 + ch2);
            }
        }
    }

    else if (n === 3) {
        let d1 = Number(digits[0]);
        let d2 = Number(digits[1]);
        let d3 = Number(digits[2]);

        for (let ch1 of mp[d1]) {
            for (let ch2 of mp[d2]) {
                for (let ch3 of mp[d3]) {
                    ans.push(ch1 + ch2 + ch3);
                }
            }
        }
    }

    else if (n === 4) {
        let d1 = Number(digits[0]);
        let d2 = Number(digits[1]);
        let d3 = Number(digits[2]);
        let d4 = Number(digits[3]);

        for (let ch1 of mp[d1]) {
            for (let ch2 of mp[d2]) {
                for (let ch3 of mp[d3]) {
                    for (let ch4 of mp[d4]) {
                        ans.push(ch1 + ch2 + ch3 + ch4);
                    }
                }
            }
        }
    }

    return ans;
};