let arr = [5, 7, 10, 15, 25, 33, 14, 16, 3, 9, 6, 4, 2, 8, 1];

for (let i = 0; i < arr.length; i++) {
  min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }
  [arr[i], arr[min]] = [arr[min], arr[i]];
}
console.log(arr);
