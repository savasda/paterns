import { WebPage } from './WebPage';
import { Theme } from './Theme';

export class About extends WebPage {
  theme: Theme;

  constructor(theme: Theme) {
    super(theme);
  }

  getContent() {
    return "Aboutpage with " + this.theme.getColor();
  }

}
