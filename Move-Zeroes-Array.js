//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example :
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

let nums = [0, 0, 4, 5, 6];

for (let i of nums) {
  if (nums[i] === 0) {
    nums.push(Number(nums.splice(i, 1).join()));
  }
}
console.log(nums);
