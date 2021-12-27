const addToHistory = (keyword) => {
  const history = findOrCreateHistoryArray();
  history.push(keyword);
  const jsonHistory = JSON.stringify(history);
  localStorage.setItem("history", jsonHistory);
};

const findOrCreateHistoryArray = () => {
  if (localStorage.getItem("history") === null) {
    const history = [];
    const jsonHistory = JSON.stringify(history);
    localStorage.setItem("history", jsonHistory);
  }

  return JSON.parse(localStorage.getItem("history"));
};

module.exports = {
  addToHistory,
  findOrCreateHistoryArray,
};
