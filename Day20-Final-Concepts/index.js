// Day 20 - Final Concepts & Review
console.log("Day 20: review key utilities in this folder.");
console.log(
  "Check debounce, curry, customMap, and closure examples in previous days."
);

// curring

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(3));

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "devide") return a / b;
//       else if (operation === "subtract") return a - b;
//       else return "Invalid Operation";
//     };
//   };
// }

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));

// console.log(evaluate("devide")(4)(2));
// console.log(evaluate("subtract")(4)(2));

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(sum(2)(1, 3));

// Debounce

const btn = document.querySelector(".increment");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressCount = 0;
let triggeredCount = 0;

// const debounceCount = _.debounce(() => {
//   count.innerText = ++triggeredCount;
// }, 800);
const throttleCount = _.throttle(() => {
  count.innerText = ++triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerText = ++pressCount;
  // debounceCount();
  throttleCount();
});
