// // // setInterval(() => {
// // //   console.log("aspkjodf");
// // // }, 1000);

// // // for (let i = 0; i < 100; i++) {
// // //   console.log(i);
// // // }

// // function varTest() {
// //   var x = 1;
// //   console.log(x, "a");
// //   if (true) {
// //     var x = 2; //та же перемменная
// //     console.log(x, "b");
// //   }
// //   console.log(x, "c");
// // }

// // varTest();

// // const letTest = () => {
// //   const x = 1;
// //   console.log(x, "a");
// //   if (true) {
// //     const x = 2; // другая переменная
// //     console.log(x, "b");
// //   }
// //   console.log(x, "c");
// // };
// // letTest();

// const doHomework = (subject, callback) => {
//   alert(`Starting my ${subject} homework`);
//   callback();
// };
// const finishHomework = () => {
//   alert("DONE!!!");
// };

// doHomework("math", finishHomework);

// const btns = document.querySelectorAll("button");

// btns.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     if (event.target.classList.contains("red")) {
//       event.target.classList.remove("red");
//     } else {
//       event.target.classList.add("red");
//     }
//   });
// });

const wrapper = document.querySelector(".wrapper");
const newBtn = document.createElement("button");

const content = document.createTextNode("321");
newBtn.appendChild(content);

wrapper.append(newBtn);

wrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("red");
  }
});
