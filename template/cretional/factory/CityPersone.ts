import { PersonalInterface } from './Persone.interface';

export class CityPersone implements PersonalInterface {
    getName(): String {
        return "City Person";
    }
}