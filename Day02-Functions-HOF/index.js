// Day 02 - Functions & HOF
const nums = [1,2,3];
const customMap = (arr, fn) => {
  const res = [];
  for (let i=0;i<arr.length;i++) res.push(fn(arr[i], i, arr));
  return res;
};
console.log(customMap(nums, n => n*2)); // [2,4,6]

// HOF returning function
const multiplyBy = factor => num => num * factor;
const double = multiplyBy(2);
console.log(double(5)); // 10
