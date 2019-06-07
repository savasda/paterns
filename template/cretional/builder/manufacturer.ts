import { PCBuilder } from './builder.interface';

export class Manufacturer {
  public static manufacture(builder: PCBuilder): string {
    builder.setMotherboard('Мать asus');
    builder.setCpu('Intel core i7');
    builder.setSsd('Sandisk SSD');
    return builder.assmblePC();
  }
}
