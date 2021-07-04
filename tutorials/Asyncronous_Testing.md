#### Setting an async function up


```javascript
const asyncFunction = {
    fetchUser: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1').then(({data}) => {
            return data;
        }).catch(err => {throw new Error('Data not available', err)});
    }
}

module.exports = asyncFunction;
```

> Please note!
> 
>  `expect.assertions(1);`

with out the assertions and the `return` keyword, the below would run and pass no matter what

```javascript
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return asyncFunction.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

```