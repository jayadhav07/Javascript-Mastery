// Day 09 - Promises
const fakeApi = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
fakeApi(500, 'A').then(v => { console.log('got', v); return fakeApi(300, 'B'); }).then(v => console.log('then chain', v));
