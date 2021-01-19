import Casino from './Casino';
import GameMachine from './GameMachine';
import User from './User';


class SuperAdmin extends User {
  constructor(name, money) {
    super(name, money);
    this.casino = [];
  }

  createCasino(casinoName) {
    const newCasino = new Casino(casinoName);
    this.casino.push(newCasino);
    return newCasino;
  }

  createGameMachine(credit, casinoName) {
    if (this.casino.length === 0) {
      console.error('Please, create some casino.');

      return;
    }

    if (credit >= this.money) {
      console.error('Not enough money for create game machine');

      return;
    }
    if (!casinoName) {
      console.error('select casino!!!');
      return;
    }

    const inCasino = this.casino.find(({ name }) => name === casinoName);

    if (inCasino.name !== casinoName) return;

    const newMachine = new GameMachine(credit);
    inCasino.machines.push(newMachine);

    this.money = this.money - credit;

    return newMachine;
  }

  removeGameMachine(id, casinoName) {
    if (this.casino.length === 0) {
      console.error('Please, create some casino.');

      return;
    }
    const inCasino = this.casino.find(({ name }) => name === casinoName);
    if (inCasino.name !== casinoName) return;
    const machines = [...inCasino.machines];
    if (machines.length === 0) {
      console.error('Please, create some machine.');

      return;
    }

    if (machines[id] === undefined) {
      console.error('Game machine ID is wrong.');

      return;
    }

    const cash = machines[id].credit;
    machines.splice(id, 1);
    const machineCount = machines.length;

    machines.forEach(machine => {
      const profit = (cash / machineCount).toFixed(2);
      machine.credit = machine.credit + Number(profit);
    });

    inCasino.machines = [...machines];
  }

  takeMoneyFromCasino(sum, casinoName) {
    const inCasino = this.casino.find(({ name }) => name === casinoName);
    if (inCasino.name !== casinoName) return;
    const machines = [...inCasino.machines];
    const allCredit = machines.reduce((acc, machine) => acc + machine.bank, 0);

    if (sum > allCredit) {
      console.error('Sorry, but sum is large that casino credit');

      return;
    }

    const percentageFromBank = sum / allCredit;

    machines.forEach(machine => {
      machine.credit = +(machine.credit * (1 - percentageFromBank)).toFixed(2);
    });

    inCasino.machines = [...machines];
    this.money += sum;
  }

  addMoneyToCasino(money, casinoName) {
    const inCasino = this.casino.find(({ name }) => name === casinoName);
    if (inCasino.name !== casinoName) return;
    const machines = [...inCasino.machines];
    if (money <= 0) {
      console.error('Please, enter sum > 0');

      return;
    }

    if (this.casino.length === 0) {
      console.error('Please, create some casino.');

      return;
    }

    const length = inCasino.machines.length;
    if (!length) {
      console.error(`Please, create some machine in casino ${inCasino.name}.`);

      return;
    }

    if (money >= this.money) {
      console.error('Not enough money for add money to game machine');

      return;
    }

    inCasino.machines.forEach(machine => {
      machine.credit = machine.credit + money / length;
    });

    this.money = this.money - money;
  }

  addMoneyToGameMachine(id, money, casinoName) {
    if (money <= 0) {
      console.error('Please, enter sum > 0');

      return;
    }

    if (this.casino.length === 0) {
      console.error('Please, create some casino.');

      return;
    }

    if (money >= this.money) {
      console.error('Not enough money for add money to game machine');

      return;
    }

    const inCasino = this.casino.find(({ name }) => name === casinoName);
    if (inCasino.name !== casinoName) return;
    const machines = [...inCasino.machines];

    if (machines[id] === undefined) {
      console.error('Game machine ID is wrong.');

      return;
    }

    this.money = this.money - money;
    machines[id].credit = machines[id].credit + money;
  }
}

export default SuperAdmin;
