import { Age } from './../src/age.js';

describe('Age', () => {

  const input = 21;
  const olderInput = 83;
  let age;
  let olderAge;
  beforeEach(() => {
    age = new Age(input);
    olderAge = new Age(olderInput);
  })
  test('should return age of user', () => {
    expect(age.userAge).toEqual(21);
  })
  test('should return life expectency left on earth', () => {
    age.lifeLeftOnEarth();
    expect(age.remainingEarthLife).toEqual(52);
  })
  test('should return amount of years lived past life expectancy', () => {
    age.lifeLeftOnEarth();
    expect(age.winningBy).toEqual(11)
  })
})