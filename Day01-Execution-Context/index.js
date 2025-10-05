// Day 01 - Execution Context & Hoisting
console.log('--- Day 01 ---');
console.log(a); // undefined (var hoisted)
var a = 10;

try {
  console.log(b); // ReferenceError due to TDZ
} catch (e) {
  console.log('TDZ error:', e.message);
}
let b = 20;

// function hoisting
greet();
function greet() { console.log('Hello from hoisted function'); }
