import { Item } from './item';

export class ItemCategory {
  protected readonly MAX_QUALITY = 50;
  protected readonly MIN_QUALITY = 0;
  protected INCREMENT = 1;
  protected incrementQuality(item: Item): void {
    if (item.quality < this.MAX_QUALITY) {
      item.quality = item.quality + this.INCREMENT;
    }
  }

  protected decrementQuality(item: Item): void {
    if (item.quality > this.MIN_QUALITY) {
      item.quality = item.quality - this.INCREMENT;
    }
    if (item.quality > this.MIN_QUALITY && item.sellIn <= 0) {
      item.quality = item.quality - this.INCREMENT;
    }
  }

  protected updateSellIn(item: Item): void {
    item.sellIn = item.sellIn - this.INCREMENT;
  }

  protected updateQuality(item: Item): void {
    this.decrementQuality(item);
  }

  public updateOneItem(item: Item): void {
    this.updateQuality(item);
    this.updateSellIn(item);
  }
}
