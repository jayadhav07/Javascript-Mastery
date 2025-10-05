// Day 06 - Deep vs Shallow Copy
const obj = {a:1, nested: {b:2}};
const shallow = {...obj};
shallow.nested.b = 99;
console.log('original after shallow change', obj.nested.b); // 99 (shared)

// deep clone using structuredClone (if supported) or JSON
const deep = JSON.parse(JSON.stringify(obj));
deep.nested.b = 5;
console.log('original after deep change', obj.nested.b); // remains 99
