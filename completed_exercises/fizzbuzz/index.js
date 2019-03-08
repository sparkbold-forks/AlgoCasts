// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (
      (i % 3 === 0 && i % 5 === 0) ||
      (n.toString().includes("3") && n.toString().includes("5"))
    ) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

// here is another solution if interviewer asking for additional
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     // Is the number a multiple of 3 and 5? OR if the number includes letter 3 and 5
//     if (
//       (i % 3 === 0 && i % 5 === 0) ||
//       (i.toString().includes("3") && i.toString().includes("5"))
//     ) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       // Is the number a multiple of 3?
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(35)
