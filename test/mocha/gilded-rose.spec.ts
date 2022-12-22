import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should update quality', () => {
    const items = [
      new Item("+5 Dexterity Vest", 1, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 47),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48),
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", -1, 6),
      new Item("Conjured Mana Cake", -1, 3),
    ];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(items[0].name).to.equal("+5 Dexterity Vest");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(19);
    expect(items[1].name).to.equal("Aged Brie");
    expect(items[1].sellIn).to.equal(1);
    expect(items[1].quality).to.equal(1);
    expect(items[2].name).to.equal("Elixir of the Mongoose");
    expect(items[2].sellIn).to.equal(4);
    expect(items[2].quality).to.equal(6);
    expect(items[3].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[3].sellIn).to.equal(0);
    expect(items[3].quality).to.equal(80);
    expect(items[4].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[4].sellIn).to.equal(-1);
    expect(items[4].quality).to.equal(80);
    expect(items[5].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[5].sellIn).to.equal(14);
    expect(items[5].quality).to.equal(21);
    expect(items[6].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[6].sellIn).to.equal(9);
    expect(items[6].quality).to.equal(49);
    expect(items[7].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[7].sellIn).to.equal(4);
    expect(items[7].quality).to.equal(50);
    expect(items[8].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[8].sellIn).to.equal(-1);
    expect(items[8].quality).to.equal(0);
    expect(items[9].name).to.equal("Conjured Mana Cake");
    expect(items[9].sellIn).to.equal(2);
    expect(items[9].quality).to.equal(4);
    expect(items[10].name).to.equal("Conjured Mana Cake");
    expect(items[10].sellIn).to.equal(-2);
    expect(items[10].quality).to.equal(2);
    expect(items[11].name).to.equal("Conjured Mana Cake");
    expect(items[11].sellIn).to.equal(-2);
    expect(items[11].quality).to.equal(0);
  });
});
