//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function (matrix) {
  let firstRowZero, firstColZero
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[0].length; col++)
      if (matrix[row][col] === 0) {
        if (row === 0) firstRowZero = true;
        if (col === 0) firstColZero = true;
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
  for (let row = 1; row < matrix.length; row++)
    for (let col = 1; col < matrix[0].length; col++)
      if (matrix[row][0] === 0 || matrix[0][col] === 0) matrix[row][col] = 0;
  if (firstRowZero) matrix[0].fill(0);
  if (firstColZero) {
    for (let row = 0; row < matrix.length; row++)
      matrix[row][0] = 0;
  }
  console.log(matrix)
}