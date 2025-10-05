// Day 18 - Functional Programming utilities
const curry = fn => (...args) =>
  args.length >= fn.length ? fn(...args) : (...rest) => curry(fn)(...args, ...rest);

const compose = (f, g) => (...args) => f(g(...args));

const add = (a,b) => a + b;
const curriedAdd = curry(add);
console.log(curriedAdd(2)(3)); // 5
console.log(compose(x => x*2, x => x+1)(3)); // 8
