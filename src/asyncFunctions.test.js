const asyncFunction = require("./asyncFunctions");

test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return asyncFunction.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
//  Async Await
test("(Async) User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  let data = await asyncFunction.fetchUser()
    expect(data.name).toEqual("Leanne Graham");
});
