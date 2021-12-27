const addToHistory = (keyword) => {
  const history = findOrCreateHistoryArray();
  history.push(keyword);
  setStrObjToLocalStorage(history);
};

const findOrCreateHistoryArray = () => {
  if (localStorage.getItem("history") === null) {
    const history = [];
    setStrObjToLocalStorage(history);
  }

  return JSON.parse(localStorage.getItem("history"));
};

const setStrObjToLocalStorage = (obj) => {
  const jsonHistory = JSON.stringify(obj);
  localStorage.setItem("history", jsonHistory);
};

module.exports = {
  addToHistory,
  findOrCreateHistoryArray,
};
