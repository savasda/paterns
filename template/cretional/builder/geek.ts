import { PCBuilder } from './builder.interface';
import { PC } from './pc';


export class Geek implements PCBuilder {
  private pc = new PC();

  assmblePC(): string {
    return this.pc.toString();
  }

  setCpu(cpu: string): void {
    this.pc.setCpu(cpu);
  }

  setSsd(ssd: string): void {
    this.pc.setSsd(ssd);
  }

  setMotherboard(mb: string): void {
    this.pc.setMotherboard(mb);
  }

}
