const addToHistory = (keyword) => {
  //
};

const createHistoryArray = () => {
  if (localStorage.getItem("history") === null) {
    const history = [];
    const jsonHistory = JSON.stringify(history);
    localStorage.setItem("history", jsonHistory);
  }
};

module.exports = {
  addToHistory,
  createHistoryArray,
};
