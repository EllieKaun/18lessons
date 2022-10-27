// // // const func = (arg) => {
// // //   console.log(123);
// // //   arg();
// // // };

// // // const func2 = () => {
// // //   console.log("321");
// // // };

// // // func(func2);

// // // const arr = [1, 2, 3, 4, 5];
// // // console.log(arr);

// // // arr.map((item) => {
// // //   console.log(item + 6);
// // // });

// // setTimeout(() => {
// //   console.log("1");
// //   setTimeout(() => {
// //     console.log("2");

// //     setTimeout(() => {
// //       console.log("2");

// //       setTimeout(() => {
// //         console.log("2");

// //         setTimeout(() => {
// //           console.log("2");

// //           setTimeout(() => {
// //             console.log("2");

// //             setTimeout(() => {
// //               console.log("2");

// //               setTimeout(() => {
// //                 console.log("2");

// //                 setTimeout(() => {
// //                   console.log("2");
// //                 }, 1000);
// //               }, 1000);
// //             }, 1000);
// //           }, 1000);
// //         }, 1000);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// console.log("старт");
// // setTimeout(() => {
// //   console.log("подготовка");
// //   const product = {
// //     name: "phone",
// //     price: "4000",
// //   };
// //   setTimeout(() => {
// //     product.status = "ordered";
// //     console.log(product);

// //   }, 2000);
// // }, 2000);

// // const resolveData = (product) => {
// //   setTimeout(() => {
// //     product.status = "ordered";
// //     console.log(product);
// //   }, 2000);
// // };

// // req.then(resolveData);

// // req.then((product) => {
// //   const req2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       product.status = "ordered";
// //       console.log(product);
// //       resolve();
// //     }, 2000);
// //   });

// //   req2.then(() => {
// //     setTimeout(() => {
// //       product.isModified = true;
// //       console.log(product);
// //     }, 1000);
// //   });
// // });

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const product = {
//       name: "phone",
//       price: "4000",
//     };
//     console.log(product);
//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "ordered";
//         console.log(product);
//         // resolve(product);
//         reject();
//     //   }, 2000);
//     });
//   })
//   .then((product) => {
//     setTimeout(() => {
//       product.isModified = true;
//       console.log(product);
//     }, 1000);
//   })
//   .finally(() => {
//     console.log("finally");
//   })
//   .catch(() => {
//     console.log("error");
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

fetch("data.json")
  .then((response) => response.json())
  .then((json) => console.log(json, "fetch"))
  .catch((e) => console.log(e))
  .finally(() => console.log("finally"));

const reqeuest = () => {
  const req = new XMLHttpRequest();
  req.open("GET", "data.json");
  req.setRequestHeader("Content-type", "application/json");
  req.send();
  req.addEventListener("load", () => {
    console.log(JSON.parse(req.response), "xhr");
  });
};
// reqeuest();

// false ? console.log("1") : console.log("2");

// function func(arg) {
//   return arg;
// }

// console.log(func("123"));

// const arrFunc = (arg = "321") => arg;

// console.log(arrFunc());

// elem.value === "" ? (target.value = "") : null;
// elem.value === "" ? (target2.value = "") : null;
// elem.value === "" ? (target3.value = "") : null;

// elem.value === ""
//   ? (target.value = "") || (target2.value = "") || (target3.value = "")
//   : null;:
