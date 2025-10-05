// Day 19 - Error Handling
const safeJSON = str => {
  try { return {ok: true, data: JSON.parse(str)}; }
  catch (e) { return {ok: false, error: e.message}; }
};
console.log(safeJSON('{"a":1}'));
console.log(safeJSON('invalid json'));
