const setStrObjToLocalStorage = (obj) => {
  const jsonHistory = JSON.stringify(obj);
  localStorage.setItem("history", jsonHistory);
};

const findOrCreateHistoryArray = () => {
  if (localStorage.getItem("history") === null) {
    const history = [];
    setStrObjToLocalStorage(history);
  }

  return JSON.parse(localStorage.getItem("history"));
};

const addToHistory = (keyword) => {
  const history = findOrCreateHistoryArray();
  if (history.includes(keyword) === false) {
    history.push(keyword);
  }
  setStrObjToLocalStorage(history);
};

const emptyHistory = () => {
  setStrObjToLocalStorage([]);
};

module.exports = {
  addToHistory,
  findOrCreateHistoryArray,
  emptyHistory,
};
