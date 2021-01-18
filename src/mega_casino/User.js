class User {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this._selectMachine = null;
  }

  get selectMachine() {
    return this._selectMachine;
  }

  set selectMachine(machine) {
    this._selectMachine = machine;
  }

  play(bet) {
    if (bet > this.money) {
      console.error(`${this.name} not enough money`);

      return;
    }

    if (this._selectMachine === null) {
      console.error("Please, select some Machine for game");

      return;
    }

    this.money += this._selectMachine.play(bet);
  }
}

export default User;
