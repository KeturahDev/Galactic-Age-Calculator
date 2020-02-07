export class Age {
  constructor(userAge) {
    this.userAge = userAge;
    this.lifeExpectency = 73;
    this.remainingEarthLife = 0;
    this.winningBy = 0;
    this.newYears = 0
  }

  lifeLeftOnEarth() {
    if (this.userAge < this.lifeExpectency) {
      this.remainingEarthLife += this.lifeExpectency - this.userAge;
    } else {
      this.winningBy += this.userAge - this.lifeExpectency;
    }
  }

  getMerked(number) {
    let newYears = number / .24;
    this.newYears = Math.round(newYears);
  }
  getVenused(number) {
    let newYears = number / .62;
    this.newYears = Math.round(newYears);
  }
  getMarsed(number) {
    let newYears = number / 1.88;
    this.newYears = Math.round(newYears);
  }
} 