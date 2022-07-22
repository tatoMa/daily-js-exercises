const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 0);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
// const p = Promise.all(resolvedPromisesArray);
// console.log(p);
// setTimeout(function () {
//   console.log("the stack is now empty");
//   console.log(p);
// //   p.then((res) => console.log(res));
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("four"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//   reject(new Error("reject"));
// });
// Promise.all([p1, p2, p3, p4, p5])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
