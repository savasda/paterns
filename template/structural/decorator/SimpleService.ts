import { ServiceInterface } from './service.interface';

export class SimpleService implements ServiceInterface {

  getCost(): number {
    return 50;
  }

  getSescription(): string {
    return 'Simple service';
  }


}
