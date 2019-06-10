import { Enployee } from './emploer.interface';

export class Disigner implements Enployee{
  name: string;
  salary: number;
  role = 'Designer';

  /**
   *
   */
  constructor(name: string, salary?: number) {
    this.name = name;
    if (salary) {
      this.salary = salary;
    } else {
      this.salary = 1000;
    }
  }

  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRoles(): string {
    return this.role;
  }


}
