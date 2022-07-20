let a = 1;
function foo() {
  let b = 1 + a;
  let c = 2;
  console.log(b);
}
foo();
console.log(c);

// let a = 1
// let b = 2
// function foo () {
//     let b = 3
//     function too () {
//         console.log(a) // 1
//         console.log(b) // 3
//     }
//     too()
// }
// foo()

// let a = 1;
// function foo() {
//   console.log(a);
// }
// function too() {
//   let a = 2;
//   foo();
// }
// too();
