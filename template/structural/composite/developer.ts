import { Enployee } from './emploer.interface';

export class Developer implements Enployee{
  name: string;
  salary: number;
  role = 'Developer';

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
