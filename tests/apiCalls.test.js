const apiCalls = require("../lib/apiCalls.js");

test("Returns at max 30 items", () => {
  expect(apiCalls.searchByUsername("query").length).toBeLessThanOrEqual(30);
});
