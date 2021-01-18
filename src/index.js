import './styles.css';

import GameMachine from './mega_casino/GameMachine';

// const game_machine = new GameMachine(4);
// console.log(game_machine._credit);
// game_machine.takeMoney(3);
// game_machine.addMoney(4);
// console.log(game_machine.play(1));

import Casino from './mega_casino/Casino';

const new_casino = new Casino('Split');
const newMachine = new GameMachine(4);
new_casino.machines.push(newMachine);
console.log(new_casino,new_casino.getMachineCount);
console.log(new_casino,new_casino._money);
