// Day 03 - Closures
const makeCounter = () => {
  let count = 0;
  return () => ++count;
};
const counter = makeCounter();
console.log(counter(), counter(), counter()); // 1 2 3

// once utility
const once = fn => {
  let called = false;
  let result;
  return (...args) => {
    if (!called) { called = true; result = fn(...args); }
    return result;
  };
};
const init = once(() => Math.random());
console.log(init(), init());
