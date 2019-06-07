import { Digitalinterface } from './digital.interface';
import { VGA } from './VGA';

export class HDMIToVGAAdapter implements Digitalinterface {
  private vga: VGA = new VGA();
  handleDigitalSignal(): string {
    return this.vga.handleAnalogSignal();
  }
}
