<br />

### Simple Testing Add Function

```javascript
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
```

| Keyword | Description                               |
| ------- | ----------------------------------------- |
| expect  | returns an expectation                    |
| toBe    | What the expectation should evaluate too. |

<br />

---

### Inverse

```javascript
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
```

| Keyword | Description       |
| ------- | ----------------- |
| not     | does the negative |

<br />

---

### Truthiness

In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

`toBeNull` matches only `null`
<br />

`toBeUndefined` matches only `undefined`
<br />

`toBeDefined` is the opposite of `toBeUndefined`
<br />

`toBeTruthy` matches anything that an `if` statement treats as true
<br />

`toBeFalsy` matches anything that an `if` statement treats as false

#### Examples

```javascript
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
```
<br />

----------------------------------------------------------------

### Testing Reference types. i.e Arrays | Objects

```javascript
test('Should be Mitchell Yuen Object', () => {
    expect(functions.createUser()).toEqual({firstName: "Mitchell", lastName: "Yuen"});
});
```

| Keyword   | Description                                           |
| --------- | ----------------------------------------------------- |
| `toEqual` | recursively checks every field of an object or array. |

<br />

----------------------------------------------------------------

### Testing with Regex

```javascript


test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
});

```

| Keyword   | Description                                 |
| --------- | ------------------------------------------- |
| `toMatch` | checks strings against regular expressions. |

<br />

----------------------------------------------------------------

### Arrays and iterables#
You can check if an array or iterable contains a particular item using toContain:

```javascript
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});


```


| Keyword     | Description                                               |
| ----------- | --------------------------------------------------------- |
| `toContain` | check if an array or iterable contains a particular item. |