// Arrange
const storageService = require("../lib/storageService");

test("History array is created in localStorage if not present", () => {
  // Act
  storageService.createHistoryArray();
  const res = window.localStorage.getItem("history");

  // Assert
  expect(res).not.toBeNull();
});

xtest("Keyword is included in localStorage history after search", () => {});
