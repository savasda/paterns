import { ServiceInterface } from './service.interface';

export class ManikurService implements ServiceInterface {
  service: ServiceInterface;

  constructor(service: ServiceInterface) {
    this.service = service;
  }

  getCost(): number {
    return this.service.getCost() + 70;
  }

  getSescription(): string {
    return 'manikur service';
  }

}
