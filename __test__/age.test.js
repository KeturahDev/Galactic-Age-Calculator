import { Age } from './../src/age.js';

describe('Age', () => {

  const input = 21;
  let age;
  beforeEach(() => {
    age = new Age(input)
  })
  test('should return age of user', () => {
    expect(age.userAge).toEqual(21);
  })
})