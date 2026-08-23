/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const k = queryIndices.length;

    const max_len = new Int32Array(4 * n + 1);
    const pref_len = new Int32Array(4 * n + 1);
    const suff_len = new Int32Array(4 * n + 1);
    const pref_char = new Uint8Array(4 * n + 1);
    const suff_char = new Uint8Array(4 * n + 1);

    function pull(idx, left_len, right_len) {
        const lc = idx * 2;
        const rc = idx * 2 + 1;
        
        pref_char[idx] = pref_char[lc];
        pref_len[idx] = pref_len[lc];
        if (pref_len[lc] === left_len && pref_char[lc] === pref_char[rc]) {
            pref_len[idx] = left_len + pref_len[rc];
        }
        
        suff_char[idx] = suff_char[rc];
        suff_len[idx] = suff_len[rc];
        if (suff_len[rc] === right_len && suff_char[rc] === suff_char[lc]) {
            suff_len[idx] = right_len + suff_len[lc];
        }
        
        let m = Math.max(max_len[lc], max_len[rc]);
        if (suff_char[lc] === pref_char[rc]) {
            m = Math.max(m, suff_len[lc] + pref_len[rc]);
        }
        max_len[idx] = m;
    }

    function build(idx, l, r) {
        if (l === r) {
            let c = s.charCodeAt(l);
            pref_char[idx] = c;
            suff_char[idx] = c;
            pref_len[idx] = 1;
            suff_len[idx] = 1;
            max_len[idx] = 1;
            return;
        }
        let mid = (l + r) >> 1;
        build(idx * 2, l, mid);
        build(idx * 2 + 1, mid + 1, r);
        pull(idx, mid - l + 1, r - mid);
    }

    function update(idx, l, r, pos, charCode) {
        if (l === r) {
            pref_char[idx] = charCode;
            suff_char[idx] = charCode;
            return;
        }
        let mid = (l + r) >> 1;
        if (pos <= mid) {
            update(idx * 2, l, mid, pos, charCode);
        } else {
            update(idx * 2 + 1, mid + 1, r, pos, charCode);
        }
        pull(idx, mid - l + 1, r - mid);
    }

    build(1, 0, n - 1);
    
    const ans = new Array(k);
    for (let i = 0; i < k; i++) {
        update(1, 0, n - 1, queryIndices[i], queryCharacters.charCodeAt(i));
        ans[i] = max_len[1]; 
    }
    
    return ans;
};