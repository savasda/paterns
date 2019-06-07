import { ThemeInterface } from './Theme.interface';
import { Theme } from './Theme';

export class LightTheme implements Theme {
  theme = 'Light';

  getColor(): string {
    return this.theme;
  }


}
