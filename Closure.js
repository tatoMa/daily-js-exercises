// function outer() {
//   let a1 = 1;
//   let a2 = 2;
//   return function inner() {
//     return a1;
//   };
// }
// function run() {
//   let getOuter = outer();
//   console.log(getOuter);
// }
// run();

// const counter = function () {
//   let number = 0;
//   function changeBy(val) {
//     number += val;
//   }
//   return {
//     add: function () {
//       changeBy(1);
//     },
//     reduce: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return number;
//     },
//   };
// };
// const counter1 = counter();
// const counter2 = counter();
// console.log(counter1.value());
// console.log(counter2.value());
// counter1.add();
// counter1.add();
// counter2.add();
// console.log(counter1.value());
// console.log(counter2.value());
