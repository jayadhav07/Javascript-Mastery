// Day 17 - Debounce & Throttle
const debounce = (fn, delay=300) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
};
const throttle = (fn, limit=300) => {
  let inThrottle;
  let lastFn;
  let lastTime;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      lastTime = Date.now();
      setTimeout(() => { inThrottle = false; if (lastFn) { lastFn(); lastFn = null; } }, limit);
    } else {
      lastFn = () => fn(...args);
    }
  };
};
console.log('debounce & throttle defined');
