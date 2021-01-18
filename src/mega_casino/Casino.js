class Casino {
  constructor(name) {
    this.name = name;
    this.machines = [];
  }

  get getMachineCount() {
    return this.machines.length;
  }

  get _money() {
    return this.machines.reduce((acc, {credit}) => {
      return acc + credit;
    }, 0);
  }
}

export default Casino;
