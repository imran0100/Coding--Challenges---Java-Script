//************************************************************************************************************************* */
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.//
//************************************************************************************************************************* */

let arr = [1, 5, 7, 9, 6, 3, 8, 2];
target = 6;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      console.log(i, j);
    }
  }
}
//*************************************** */
//Solve Using object///More Fast Method
//*************************************** */
let arr1 = [1, 5, 7, 9, 6, 3, 8, 2];
target1 = 12;
let obj1 = {};
for (let i = 0; i < arr1.length; i++) {
  miss = target1 - arr[i];

  if (obj1[miss] == undefined) {
    obj1[arr1[i]] = i;
  } else {
    console.log(obj1[miss], i);
  }
}
