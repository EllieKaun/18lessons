// const obj = {
//   name: "John",
//   age: 20,
// };

// // const key = "age";
// obj.id = 1;
// console.log(obj, "obj");

// const data = JSON.stringify(obj);

// console.log(data, "string");
// console.log(JSON.parse(data), "parse");

const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   const reqest = new XMLHttpRequest(); //создание запроса
//   reqest.open("GET", "data.json"); //указание метода запроса и ссылки
//   reqest.setRequestHeader("Content-type", "application/json"); //добавляем тип данных в хэдерс-
//   reqest.send(); // отправляем запрос
//   reqest.addEventListener("load", () => {
//     console.log(JSON.parse(reqest.response));
//     const data = JSON.parse(reqest.response);
//     document.querySelector(".name").innerHTML = data.name;
//     document.querySelector(".age").innerHTML = data.age;
//   });
// });

// if (!0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// number string null boolean undefined NaN - primitive
//  obj arr - obj

// const num = 5;

// let num2 = num + 8;

// console.log(num);
// console.log(num2);

// const obj = {
//   name: "Alex",
//   id: 1,
// };

// const obj2 = { ...obj };

// obj2.name = "Jin";
// obj2.num = "+9965555555555";

// const obj3 = { ...obj2 };

// obj3.name = "Kayl";
// obj3.num = "+9964444444444";

// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// const arr = [1, 2, 3, 4, 5, 6];

// arr.map((item, idx) => {
//   console.log(item, idx);
// });

// const words = ["apple", "banana", "watermelon", "melon"];

// const res = words.filter((item) => item.length > 5);

// console.log(words);

const arr = [1, 2, 3, 4];

const init = 0;

const sum = arr.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
}, init);

console.log(sum);
