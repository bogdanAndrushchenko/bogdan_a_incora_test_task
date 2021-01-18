class GameMachine {
  constructor(credit) {
    this.credit = credit;
  }

  get _credit() {
    return this.credit;
  }

  takeMoney(money) {
    if (money <= this.credit) {
      this.credit = this.credit - money;
      // console.log(this.money);
    }
  }

  addMoney(money) {
    this.credit = this.credit + money;
    // console.log(this.money);
  }

  play(rate) {
    let firstSlot = Math.floor(Math.random() * (10 - 0)) + 0;
    let secondSlot = Math.floor(Math.random() * (10 - 0)) + 0;
    let thirdSlot = Math.floor(Math.random() * (10 - 0)) + 0;
    this.credit = this.credit + rate;
    // console.log(firstSlot, secondSlot, thirdSlot);

    if (
      firstSlot == secondSlot ||
      firstSlot == thirdSlot ||
      secondSlot == thirdSlot
    ) {
      alert('Great - double gain!');
      rate = rate * 2;
      this.credit = this.credit - rate;
      return rate;
    } else if (firstSlot == secondSlot && secondSlot == thirdSlot) {
      alert('Great - super gain!');
      rate = rate * 3;
      this.credit = this.credit - rate;
      return rate;
    } else {
      alert('Omg losing!');
      this.credit = this.credit + rate;
      return rate;
    }
  }
};

export default GameMachine;
