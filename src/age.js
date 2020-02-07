export class Age {
  constructor(userAge) {
    this.userAge = userAge
    this.lifeExpectency = 73
    this.remainingEarthLife = 0
  }

  lifeLeftOnEarth() {
    this.remainingEarthLife += this.lifeExpectency - this.userAge;
  }
} 