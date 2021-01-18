import Casino from './Casino';
import User from './User';


class SuperAdmin extends User {
  constructor(name, money) {
    super(name, money);
    this.casino = null;
  }

  createCasino(casinoName) {
    const newCasino = new Casino(casinoName);
    this.casino = newCasino;

    return newCasino;
  }

  createGameMachine(credit) {
    if (!this.casino) {
      console.error("Please, create some casino.");

      return;
    }

    if (credit >= this.money) {
      console.error("Not enough money for create game machine");

      return;
    }

    const newMachine = new GameMachine(credit);
    this.casino.machines.push(newMachine);
    this.money = this.money - credit;

    return newMachine;
  }

  removeGameMachine(id) {
    if (!this.casino) {
      console.error("Please, create some casino.");

      return;
    }

    const machines = [...this.casino.machines];
    if (!machines.length) {
      console.error("Please, create some machine.");

      return;
    }

    if (machines[id] === undefined) {
      console.error("Game machine ID is wrong.");

      return;
    }

    const cash = machines[id].bank;
    machines.splice(id, 1);
    const machineCount = machines.length;

    machines.forEach(machine => {
      const profit = (cash / machineCount).toFixed(2);
      machine.bank += +profit;
    });

    this.casino.machines = [...machines];
  }

  takeMoneyFromCasino(sum) {
    const machines = [...this.casino.machines];
    const allBank = machines.reduce((acc, machine) => acc + machine.bank, 0);

    if (sum > allBank) {
      console.error("Sorry, but sum is larget that casino bank");

      return;
    }

    const percentageFromBank = sum / allBank;

    machines.forEach(machine => {
      machine.bank = +(machine.bank * (1 - percentageFromBank)).toFixed(2);
    });

    this.casino.machines = [...machines];
    this.money += sum;
  }

  addMoneyToCasino(money) {
    if (money <= 0) {
      console.error("Please, enter sum > 0");

      return;
    }

    if (!this.casino) {
      console.error("Please, create some casino.");

      return;
    }

    const length = this.casino.machines.length;
    if (!length) {
      console.error("Please, create some machine.");

      return;
    }

    if (money >= this.money) {
      console.error("Not enough money for add money to game machine");

      return;
    }

    this.casino.machines.forEach(machine => {
      machine.bank += money / length;
    });

    this.money -= money;
  }

  addMoneyToGameMachine(id, money) {
    if (money <= 0) {
      console.error("Please, enter sum > 0");

      return;
    }

    if (!this.casino) {
      console.error("Please, create some casino.");

      return;
    }

    if (money >= this.money) {
      console.error("Not enough money for add money to game machine");

      return;
    }

    if (this.casino.machines[id] === undefined) {
      console.error("Game machine ID is wrong.");

      return;
    }

    this.money -= money;
    this.casino.machines[id].bank += money;
  }
}
