import { ThemeInterface } from './Theme.interface';

export class Theme implements ThemeInterface {
  theme: string;
  /**
   *
   */
  constructor(th: string) {
    this.theme = th;
  }
  getColor(): string {
    return this.theme;
  }
}
