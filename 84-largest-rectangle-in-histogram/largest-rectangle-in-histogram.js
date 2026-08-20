var largestRectangleArea = function(heights) {
    const stack = [];
    let area = 0;
    const n = heights.length;

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let bar = stack.pop();
            let pse = stack.length ? stack[stack.length - 1] : -1;
            let nse = i;
            area = Math.max(area, heights[bar] * (nse - pse - 1));
        }
        stack.push(i);
    }

    while (stack.length) {
        let bar = stack.pop();
        let pse = stack.length ? stack[stack.length - 1] : -1;
        let nse = n;
        area = Math.max(area, heights[bar] * (nse - pse - 1));
    }

    return area;
};