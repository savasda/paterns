import { PersoneType } from './PersoneTypes';
import { VilagePersone } from './VillagePersone';
import { CityPersone } from './CityPersone';

export class PersonFactory {
    public static createProduct(type: PersoneType) {
        if(type === PersoneType.vilage) return new VilagePersone();
        if(type === PersoneType.urban) return new CityPersone();
        return null;
    }
}