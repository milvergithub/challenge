import { ItemCategory } from './item-category';
import { Item } from './item';

export class BackstagePass extends ItemCategory {


  protected override incrementQuality(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
      return;
    }
    if (item.quality < this.MAX_QUALITY) {
      item.quality = item.quality + this.INCREMENT;
    }
    if (item.quality < this.MAX_QUALITY && item.sellIn <= 10) {
      item.quality = item.quality + this.INCREMENT;
    }
    if (item.quality < this.MAX_QUALITY && item.sellIn <= 5) {
      item.quality = item.quality + this.INCREMENT;
    }
  }

  protected override updateQuality(item: Item) {
    this.incrementQuality(item);
  }
}
