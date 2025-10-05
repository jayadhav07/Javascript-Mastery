// Day 15 - Events & Delegation (browser)
// Example for browser:
// document.querySelector('#list').addEventListener('click', e => {
//   if (e.target.matches('.delete')) {
//     e.target.closest('li').remove();
//   }
// });
console.log("Event delegation example provided as browser snippet.");

// Event Bubbling eg.

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", () => {
//   alert("div");
// });
// form.addEventListener("click", () => {
//   alert("form");
// });

// button.addEventListener("click", () => {
//   alert("button");
// });

// DIfferent between event.currenttarget and event.target

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", func);
// form.addEventListener("click", func);

// button.addEventListener("click", func);

// function func() {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this = " +
//       this.tagName
//   );
// }

// what is event capturing

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener(
//   "click",
//   () => {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );
// form.addEventListener(
//   "click",
//   () => {
//     alert("form");
//   },
//   {
//     capture: true,
//   }
// );

// button.addEventListener(
//   "click",
//   () => {
//     alert("button");
//   },
//   {
//     capture: true,
//   }
// );

// event delegation
// document.querySelector(".products").addEventListener("click", (e) => {
//   console.log(e.target.tagName);
//   if (e.target.tagName === "SPAN") {
//     window.location.href += "/" + e.target.className;
//   }
// });
