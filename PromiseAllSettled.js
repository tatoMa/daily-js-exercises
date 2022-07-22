// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo")
// );
// const promises = [promise1, promise2];
// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result))
// );

// Promise.allSettled([
//   Promise.resolve(1),
//   new Promise((resolve) => {
//     resolve(2);
//   }),
//   Promise.reject(new Error("an error")),
// ]).then((values) => console.log(values));

// const values = await Promise.allSettled([
//   Promise.resolve(1),
//   new Promise((resolve) => {
//     resolve(2);
//   }),
//   Promise.reject(new Error("an error")),
// ]);
// console.log(values);
// const data = values.filter((value) => value.status === "fulfilled");
// // console.log(data);
