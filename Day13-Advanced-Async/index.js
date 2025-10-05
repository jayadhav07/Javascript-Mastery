// Day 13 - AbortController example (node may not support fetch/AbortController here)
// Example code for browser:
/*
const controller = new AbortController();
const id = setTimeout(() => controller.abort(), 3000);
fetch('https://httpbin.org/delay/5', {signal: controller.signal})
  .then(r => r.json())
  .then(console.log)
  .catch(err => console.log('fetch aborted or failed', err.message));
*/ 
console.log('AbortController example included in comments for browser.');
