import { ItemCategory } from './item-category';
import { Item } from './item';

export class Legendary extends ItemCategory {

  public override updateOneItem(item: Item) {
    item.quality = 80;
  }
}
