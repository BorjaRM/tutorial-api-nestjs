import { Items } from '../api/items.interface';
import { IsString, IsInt } from 'class-validator';

/* export class ItemsDto implements Items {
    constructor(
        public readonly name: string,
        public readonly price: number,
     ) {}

}*/

export class ItemsDto implements Items{
  @IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;
}