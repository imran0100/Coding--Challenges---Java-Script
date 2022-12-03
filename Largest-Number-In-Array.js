"use strict";

let arr = [4, 6, 5, 10, 11, 9, 15, 10];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
