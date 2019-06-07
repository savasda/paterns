export class PC {
  private motherboard: string;
  private cpu: string;
  private ssd: string;

  public getMotherboard(): string {
    return this.motherboard;
  }

  public getCpu(): string {
    return this.cpu;
  }

  public getSsd(): string {
    return this.ssd;
  }

  public setMotherboard(mb: string) {
    this.motherboard = mb;
  }

  public setSsd(ssd: string): void {
    this.ssd = ssd;
  }

  public setCpu(cp: string)  {
    this.cpu = cp;
  }

  toString(): string {
    return `Motherboard: ${this.motherboard}, SSD: ${this.ssd}, CPU: ${this.cpu}`;
  }
}
