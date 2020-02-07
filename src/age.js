export class Age {
  constructor(userAge) {
    this.userAge = userAge;
    this.lifeExpectency = 73;
    this.remainingEarthLife = 0;
    this.winningBy = 0;
    this.newAge = 0
  }

  lifeLeftOnEarth() {
    if (this.userAge < this.lifeExpectency) {
      this.remainingEarthLife += this.lifeExpectency - this.userAge;
    } else {
      this.winningBy += this.userAge - this.lifeExpectency;
    }
  }

  getMerked(number) {
    let newAge = number / .24;
    this.newAge = Math.round(newAge);

  }
} 