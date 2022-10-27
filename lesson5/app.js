const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

// som.addEventListener("input", () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "data.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();
//   request.addEventListener("load", () => {
//     const response = JSON.parse(request.response);
//     usd.value = (som.value / response.usd).toFixed(2);
//   });
// });

const convert = (elem, target, isTrue) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", () => {
      const response = JSON.parse(request.response);
      isTrue
        ? (target.value = (elem.value / response.usd).toFixed(2))
        : (target.value = (elem.value * response.usd).toFixed(2));

      //   elem.value === "" ? (target.value = "") : null;
      elem.value === "" && (target.value = "");
    });
  });
};

convert(som, usd, 42);
convert(usd, som, "");

//  "", NaN, false, null, undef, 0
