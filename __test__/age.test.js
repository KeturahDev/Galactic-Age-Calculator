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
    olderAge.lifeLeftOnEarth();
    expect(olderAge.winningBy).toEqual(10);
  })

  //testing for Mercury method
  test('should return age of user on Mercury', () => {
    age.getMerked(age.userAge);
    expect(age.newYears).toEqual(88);
  })
  test('should return life expectency left on Mercury', () => {
    age.lifeLeftOnEarth();
    age.getMerked(age.remainingEarthLife);
    expect(age.newYears).toEqual(217);
  })
  test('should return amount of years lived past life expectancy on Mercury', () => {
    olderAge.lifeLeftOnEarth();
    olderAge.getMerked(olderAge.winningBy);
    expect(olderAge.newYears).toEqual(42);
  })

  //testing for Venus method
  test('should return age of user on Venus', () => {
    age.getVenused(age.userAge);
    expect(age.newYears).toEqual(34);
  })
  test('should return life expectency left on Venus', () => {
    age.lifeLeftOnEarth();
    age.getVenused(age.remainingEarthLife);
    expect(age.newYears).toEqual(84);
  })
  test('should return amount of years lived past life expectancy on Venus', () => {
    olderAge.lifeLeftOnEarth();
    olderAge.getVenused(olderAge.winningBy);
    expect(olderAge.newYears).toEqual(16);
  })
})