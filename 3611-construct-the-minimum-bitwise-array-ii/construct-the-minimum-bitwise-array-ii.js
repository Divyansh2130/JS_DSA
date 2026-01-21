/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
  var ans=new Array(nums.length);
  for (let i=0; i<nums.length; i++) {
  if (nums[i] == 2) {
    ans[i] = -1;
    continue;
  }

  let str = nums[i].toString(2);
  let arr = str.split('');   // <-- make mutable

  for (let j = arr.length - 1; j >= 0; j--) {
    if (j == 0 && arr[j] == '1') {
      arr[0] = '0';
      break;
    }
    if (arr[j] == '1') continue;
    else {
      arr[j+1] = '0';
      break;
    }
  }

  str = arr.join('');  // <-- turn back to string
  ans[i] = parseInt(str, 2);
}
 

  return ans; 
};