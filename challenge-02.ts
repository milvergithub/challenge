
export class Item {
  name: string;

  sellIn: number;

  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

class ItemCategory {
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

class Legendary extends ItemCategory {

  public override updateOneItem(item: Item) {
    item.quality = 80;
  }
}

class Cheese extends ItemCategory {

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

class BackstagePass extends ItemCategory {


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

class Conjured extends ItemCategory {

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
