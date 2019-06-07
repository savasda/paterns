import { AbstractSheep } from './abstractSheep.interface';

export class Sheep implements AbstractSheep {
  private name: string;
  private color: string;
  /**
   *
   */
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  clone(): AbstractSheep {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  getColor(): string {
    return this.color;
  }

  getName(): string {
    return this.name;
  }
}
