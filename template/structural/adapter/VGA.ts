import { AnalogueInterfacce } from './analogue.interface';

export class VGA implements AnalogueInterfacce {
  handleAnalogSignal(): string {
    return 'Interface: VGA; \n Signal: analogue';
  }
}
