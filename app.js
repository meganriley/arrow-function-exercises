//original code

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//version 1
//   function double(arr) {
//     return arr.map((val) => {
//         val * 2;
//     })
//   }

//final result
const double = arr => arr.map((val) => val * 2);

//original code
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

  //version1
//   function squareAndFindEvens(numbers) {
//       const squares = numbers => numbers.map((num) => num ** 2);
//       const evens = squares => squares.filter((square) => square % 2 === 0);
//       return evens;
//   }

  //version2 or final version
  const squareAndFindEvens = numbers => numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);