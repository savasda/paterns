import { Component, OnInit, SimpleChange } from '@angular/core';
import { PersonalInterface } from 'template/cretional/factory/Persone.interface';
import { PersonFactory } from 'template/cretional/factory/PeroneFactory';
import { PersoneType } from 'template/cretional/factory/PersoneTypes';
import { ChromeOSBookFactory } from 'template/cretional/abstract-factory/ChromeOSBookFactory';
import { FactoryOfFactories } from 'template/cretional/abstract-factory/factory-of-factorys';
import { Geek } from 'template/cretional/builder/geek';
import { Manufacturer } from 'template/cretional/builder/manufacturer';
import { Sheep } from 'template/cretional/prototype/sheep';
import { Singleton } from 'template/cretional/singleton/singleton';
import { HDMIToVGAAdapter } from 'template/structural/adapter/HDMIToVGAAdapter';
import { About } from 'template/structural/bridge/About';
import { LightTheme } from 'template/structural/bridge/LightTheme';
import { DarkTheme } from 'template/structural/bridge/DarkTheme';
import { Contacts } from 'template/structural/bridge/Contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  private villager: PersonalInterface = PersonFactory.createProduct(PersoneType.urban);
  private town: PersonalInterface = PersonFactory.createProduct(PersoneType.vilage);

  ngOnInit(): void {
    console.log('%c -- Factory --', 'color: blue')
    console.log(this.villager.getName());
    console.log(this.town.getName());
    console.log('%c -- Abstract factory --', 'color: blue');
    const chromeBookFactory = <ChromeOSBookFactory> FactoryOfFactories.getOSFactory(FactoryOfFactories.CHROMEOSBOOK);
    const inch13 = chromeBookFactory.getChromebook(ChromeOSBookFactory.CHROMEBOOKINCH13);
    const inch15 = chromeBookFactory.getChromebook(ChromeOSBookFactory.CHROMEBOOKINCH15);
    const inch17 = chromeBookFactory.getChromebook(ChromeOSBookFactory.CHROMEBOOKINCH17);
    console.log(inch13.bootLaptop());
    console.log(inch15.bootLaptop());
    console.log(inch17.bootLaptop());
    console.log('%c -- Builder --', 'color: blue');
    const geek: Geek = new Geek();
    const pc: string = Manufacturer.manufacture(geek);
    console.log(pc);
    console.log('%c -- Prototype --', 'color: blue');
    const sheep: Sheep = new Sheep('vasia', 'red');
    const cloneSheep = <Sheep>sheep.clone();
    console.log(`Color: ${cloneSheep.getColor()}, Name: ${cloneSheep.getName()}`);
    console.log('%c -- Singleton --', 'color: blue');
    const singleton = Singleton.getInstance();
    singleton.setCounter(2);
    const singleton2 = Singleton.getInstance();
    console.log(`Value mast be 2: ${singleton2.getCounter()}`);
    console.log('%c -- Adapter --', 'color: blue');
    const adapter: HDMIToVGAAdapter = new HDMIToVGAAdapter();
    console.log(adapter.handleDigitalSignal());
    console.log('%c -- Bridge --', 'color: blue');
    const about: About = new About(new LightTheme());
    const contacts: About = new Contacts(new DarkTheme());
    console.log(about.getContent());
    console.log(contacts.getContent());
  }

}
