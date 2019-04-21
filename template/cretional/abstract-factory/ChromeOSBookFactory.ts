export class ChromeOSBookFactory {
    static get CHROMEBOOKINCH13(){
        return 0;
    }

    static get CHROMEBOOKINCH15(){
        return 1;
    }

    static get CHROMEBOOKINCH17(){
        return 2;
    }

    getChromebook(label) {
        switch(label) {
            case ChromeOSBookFactory.CHROMEBOOKINCH13:
                return new ChromeBookInch13();
            case ChromeOSBookFactory.CHROMEBOOKINCH15:
                return new ChromeBookInch15();
            case ChromeOSBookFactory.CHROMEBOOKINCH17:
                return new ChromeBookInch17();
            default:
                throw new Error('Chromebook is not recognized');
        }
    }
}


class ChromeBook {
  name: string;
  constructor(name) {
      this.name = name;
  }  
  bootLaptop() {
      return `${this.name} is booting ...`
  }
}

class ChromeBookInch13 extends ChromeBook {
    constructor() {
        super('Chromebook 13 inches');
    }
}

class ChromeBookInch15 extends ChromeBook {
    constructor() {
        super('Chromebook 15 inches');
    }
}

class ChromeBookInch17 extends ChromeBook {
    constructor() {
        super('Chromebook 17 inches');
    }
}