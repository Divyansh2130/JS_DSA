function firstUniqChar(s: string): number {
    const mp = new Map<string, number>();

    // count frequency
    for (const c of s) {
        mp.set(c, (mp.get(c) ?? 0) + 1);
    }

    // find first unique
    for (let i = 0; i < s.length; i++) {
        if (mp.get(s[i]) === 1) return i;
    }

    return -1;
}
