function  groupBy(xs, key) {
    let result;
    try {
      const grouped = xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push({...x});
        return rv;
      }, {});
      result = Object.keys(grouped).map((i) => ({ group: i, data: grouped[i] }));
    } catch {
      result = [];
    }
    return result;
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export {
    groupBy,
    debounce
};
