import { Enployee } from './emploer.interface';

export class Company {
  emploers: Array<Enployee>;
  /**
   *
   */
  constructor() {
    this.emploers = [];
  }

  addEmployer(employer: Enployee) {
    this.emploers.push(employer);
  }

  removeEmployer(employer: Enployee) {

  }

  getNetSlary(): void {
    this.emploers.forEach((em: Enployee) => {
      console.log(em.getName() + ': ' + em.getSalary());
    });
  }

}
