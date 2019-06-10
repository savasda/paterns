import { PC } from './computer';

export class ComputerFacade {
  computer: PC;

  /**
   *
   */
  constructor(pc: PC) {
    this.computer = pc;
  }

  turnOn() {
    this.computer.checkPower();
    this.computer.makeSound();
    this.computer.showloadingScreen();
    this.computer.readyState();
  }

  turnOff() {
    this.computer.endProcess();
  }
}
