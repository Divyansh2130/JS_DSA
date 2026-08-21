/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    coins.sort((a, b) => a - b);

    const newCoins = [];

    for (const x of coins) {
        let keep = true;

        for (const y of newCoins) {
            if (x % y === 0) {
                keep = false;
                break;
            }
        }

        if (keep) {
            newCoins.push(x);
        }
    }

    const n = newCoins.length;
    const m = 1 << n;

    const lcm = new Array(m).fill(1);

    let left = k;
    let right = newCoins[0] * k + 1;

    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = a % b;
            a = b;
            b = temp;
        }

        return a;
    };

    for (let mask = 1; mask < m; mask++) {
        const prevMask = mask & (mask - 1);
        const bit = mask & -mask;

        let i = 0;
        let tempBit = bit;

        while ((tempBit & 1) === 0) {
            tempBit >>= 1;
            i++;
        }

        const temp =
            lcm[prevMask] /
            gcd(lcm[prevMask], newCoins[i]);

        if (temp <= Math.floor(right / newCoins[i])) {
            lcm[mask] = temp * newCoins[i];
        } else {
            lcm[mask] = right + 1;
        }
    }

    const bitCount = (x) => {
        let count = 0;

        while (x > 0) {
            count += x & 1;
            x >>= 1;
        }

        return count;
    };

    const get = (x) => {
        let count = 0;

        for (let mask = 1; mask < m; mask++) {
            if (lcm[mask] > x) {
                continue;
            }

            if (bitCount(mask) % 2 === 1) {
                count += Math.floor(x / lcm[mask]);
            } else {
                count -= Math.floor(x / lcm[mask]);
            }
        }

        return count;
    };

    while (left < right) {
        const mid = Math.floor(
            left + (right - left) / 2
        );

        if (get(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};