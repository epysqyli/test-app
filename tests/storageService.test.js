const storageService = require("../lib/storageService");

test("History array is created in localStorage if not present", () => {
  storageService.findOrCreateHistoryArray();
  const res = window.localStorage.getItem("history");

  expect(res).not.toBeNull();
});

test("History array is returned from localStorage if present", () => {
  const res = storageService.findOrCreateHistoryArray();

  expect(res).not.toBeNull();
});

test("Username is included as a search keyword in localStorage history", () => {
  storageService.addToHistory("john");

  const storage = storageService.findOrCreateHistoryArray();
  expect(storage).toContain("john");
});

test("Already present keyword is not added to history", () => {
  storageService.addToHistory("john");

  const storage = storageService.findOrCreateHistoryArray();
  const count = storage.filter((item) => item == "john");
  expect(count.length).toBe(1);
})

test("History is empty after cleanup", () => {
  storageService.emptyHistory();
  const res = storageService.findOrCreateHistoryArray();

  expect(res.length).toBe(0);
});
