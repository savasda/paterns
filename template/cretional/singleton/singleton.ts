export class Singleton {
  private static instance: Singleton;
  private counter = 0;

  /**
   *
   */
  constructor() {

  }


  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  setCounter(c: number) {
    this.counter = c;
  }

  getCounter(): number {
    return this.counter;
  }


}
