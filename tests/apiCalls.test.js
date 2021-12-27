// Arrange
const apiCalls = require("../lib/apiCalls.js");

xtest("Returns json resp with at max 30 user items", async () => {
  // Act
  const resp = await apiCalls.searchByUsername();

  // Assert
  expect(resp.data.items.length).toBeLessThanOrEqual(30);
});
