// Day 12 - Generators & Iterators
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}
const gen = idGenerator();
console.log(gen.next().value, gen.next().value, gen.next().value); // 1 2 3

// custom iterable
const squares = {
  *[Symbol.iterator]() {
    for (let i=1;i<=5;i++) yield i*i;
  }
};
console.log([...squares]); // [1,4,9,16,25]
