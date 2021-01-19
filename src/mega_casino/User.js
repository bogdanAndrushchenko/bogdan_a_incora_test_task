class User {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this._selectMachine = null;
  }

  get selectMachine() {
    return this._selectMachine;
  }

  set selectMachine(gameMachine) {
    this._selectMachine = gameMachine;
  }

  play(rate) {
    if (rate > this.money) {
      console.error(`${this.name} not enough money!!!`);

      return;
    }

    if (this._selectMachine === null) {
      console.error("Please, select some GameMachine :)");

      return;
    }

    this.money =this.money + this._selectMachine.play(rate);
  }
}

export default User;
