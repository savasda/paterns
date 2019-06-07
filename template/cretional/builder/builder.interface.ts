export interface PCBuilder {
  assmblePC(): string;
  setCpu(cpu: string): void;
  setSsd(ssd: string): void;
  setMotherboard(m: string): void;
}
