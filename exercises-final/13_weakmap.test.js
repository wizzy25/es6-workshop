test('has a set method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  const myMap = new WeakMap()
  myMap.set(key, value)
  expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
  const privateData = new WeakMap()
  class Person {
    constructor(name, age) {
      privateData.set(this, {name, age})
    }

    getName() {
      return privateData.get(this).name
    }

    getAge() {
      return privateData.get(this).age
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
