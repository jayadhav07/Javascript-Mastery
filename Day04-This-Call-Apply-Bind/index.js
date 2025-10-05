// Day 04 - this, call, apply, bind (simple myBind)
Function.prototype.myBind = function(context, ...bindArgs) {
  const fn = this;
  return function(...args) {
    return fn.apply(context, [...bindArgs, ...args]);
  };
};
const obj = {name: 'Jay'};
function say(greet) { console.log(greet + ', ' + this.name); }
const bound = say.myBind(obj, 'Hello');
bound(); // Hello, Jay
