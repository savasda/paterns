import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from 'template/cretional/factory/Persone.interface';
import { PersonFactory } from 'template/cretional/factory/PeroneFactory';
import { PersoneType } from 'template/cretional/factory/PersoneTypes';

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
    console.log('%c -- Abstract factory --', 'color: blue')
  }

}
