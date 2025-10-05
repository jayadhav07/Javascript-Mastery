// Day 10 - async/await
const fetchJSON = async url => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network error');
    return await res.json();
  } catch (e) { console.error('Fetch error', e.message); return null; }
};
// Example: fetchJSON('https://api.github.com/users/octocat').then(console.log);
console.log('async/await utility defined (fetch disabled in offline env)');
