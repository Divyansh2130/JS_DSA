function minimumCost(nums: number[]): number {
    let fElement=nums[0];
    const start = 1;
const end = nums.length - 1; // or any end >= start
nums.splice(start, end - start + 1, ...nums.slice(start, end + 1).sort((a, b) => a - b));


    return fElement+nums[1]+nums[2];
};