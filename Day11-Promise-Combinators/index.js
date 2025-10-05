// Day 11 - Promise combinators
const p1 = new Promise(r => setTimeout(() => r('one'), 500));
const p2 = new Promise(r => setTimeout(() => r('two'), 300));
Promise.race([p1, p2]).then(v => console.log('race:', v));
Promise.all([p1, p2]).then(v => console.log('all:', v));
