import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from 'template/cretional/factory/Persone.interface';
import { PersonFactory } from 'template/cretional/factory/PeroneFactory';
import { PersoneType } from 'template/cretional/factory/PersoneTypes';
import { ChromeOSBookFactory } from 'template/cretional/abstract-factory/ChromeOSBookFactory';
import { FactoryOfFactories } from 'template/cretional/abstract-factory/factory-of-factorys';

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


  }

}
