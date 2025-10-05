// Day 07 - ES6+ Features examples
const user = {name: 'Jay', age: 24};
const {name, age} = user;
const updated = {...user, country: 'IN'};
const greet = (x='friend') => `Hi ${x}`;
console.log(name, age, updated, greet());
