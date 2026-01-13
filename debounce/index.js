function search(query) {
  console.log(`searching ${query}`);
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const dbSearch = debounce(search, 1000);

dbSearch("Who is elonn musk?");
