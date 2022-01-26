import { ItemCategory } from './item-category';
import { Item } from './item';

export class Cheese extends ItemCategory {

  protected override incrementQuality(item: Item) {
    if (item.quality < this.MAX_QUALITY) {
      item.quality = item.quality + this.INCREMENT;
    }
    if (item.quality < this.MAX_QUALITY && item.sellIn <= 0) {
      item.quality = item.quality + this.INCREMENT;
    }
  }

  protected override updateQuality(item: Item) {
    this.incrementQuality(item);
  }
}
