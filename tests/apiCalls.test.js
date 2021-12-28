const apiCalls = require("../lib/apiCalls.js");

test("Returns json resp with at max 30 user items", async () => {
  const username = "john";
  const resp = await apiCalls.searchByUsername(username);

  expect(resp.data.items.length).toBeLessThanOrEqual(30);
});
