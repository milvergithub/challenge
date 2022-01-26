import { ItemCategory } from './item-category';
import { Item } from './item';

export class Conjured extends ItemCategory {

  private DECREMENT = 2;

  protected override decrementQuality(item: Item) {
    if (item.quality < this.DECREMENT) {
      item.quality = 0;
      return;
    }
    if (item.quality > this.MIN_QUALITY) {
      item.quality = item.quality - this.DECREMENT;
    }
    if (item.quality > this.MIN_QUALITY && item.sellIn <= 0) {
      item.quality = item.quality - this.DECREMENT;
    }
  }
}
