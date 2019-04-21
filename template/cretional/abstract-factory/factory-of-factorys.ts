import { ChromeOSBookFactory } from './ChromeOSBookFactory';

export class FactoryOfFactories {
    static get CHROMEOSBOOK(){
        return 0;
    }

    static get MACOSBOOK() {
        return 1;
    }

    static get WINDOWSOS() {
        return 2;
    }


    static getOSFactory(label)  {
        switch(label) {
            case FactoryOfFactories.CHROMEOSBOOK :
                return new ChromeOSBookFactory();
            case FactoryOfFactories.MACOSBOOK:
                // return new MackOSBookFactory();
            case FactoryOfFactories.WINDOWSOS:
                // return new WindowOSBookFactory();
            default:
                throw new Error('OS is not recognized');
        }
    }
}