import SuperAdmin from './mega_casino/SuperAdmin';

const boss = new SuperAdmin("Big Dudy",100);






//////////////////TEST/////
import GameMachine from './mega_casino/GameMachine';

// const game_machine = new GameMachine(4);
// console.log(game_machine._credit);
// game_machine.takeMoney(3);
// game_machine.addMoney(4);
// console.log(game_machine.play(1));

// import Casino from './mega_casino/Casino';
//
// const new_casino = new Casino('Split');
// const newMachine = new GameMachine(4);
// new_casino.machines.push(newMachine);
// console.log(new_casino,new_casino.getMachineCount);
// console.log(new_casino,new_casino._money);
//
//
console.log(boss.createCasino("Split"));
console.log(boss.createCasino("Sofia"));
// boss.createGameMachine(5,'gdjs' )
console.log(boss.createGameMachine(5,'Split' ));
console.log(boss.createGameMachine(10,'Split' ));
console.log(boss.casino);

boss.removeGameMachine(1,'Split')
console.log(boss.casino);
boss.addMoneyToCasino(20, "Sofia");
boss.takeMoneyFromCasino(10,"Sofia");

boss.addMoneyToGameMachine(0,20,"Split")


