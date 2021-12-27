const apiCalls = require("../lib/apiCalls.js");

test("Returns json resp with at max 30 user items", async () => {
  const resp = await apiCalls.searchByUsername();

  expect(resp.data.items.length).toBeLessThanOrEqual(30);
});
