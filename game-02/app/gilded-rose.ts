import { Item } from './item';
import { ItemCategory } from './item-category';
import { Legendary } from './legendary';
import { Cheese } from './cheese';
import { BackstagePass } from './backstage-pass';
import { Conjured } from './conjured';

export class GildedRose {
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  public updateQuality(): void {
    for (const item of this.items) {
      const category: ItemCategory = GildedRose.categorize(item);
      category.updateOneItem(item);
    }
  }
  private static categorize(item: Item): ItemCategory {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return new Legendary();
    }
    if (item.name === 'Aged Brie') {
      return new Cheese();
    }
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      return new BackstagePass();
    }
    if (item.name === 'Conjured')
      return new Conjured();
    return new ItemCategory();
  }
}
