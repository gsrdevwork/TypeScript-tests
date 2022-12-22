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
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(19);
    expect(items[1].name).toBe("Aged Brie");
    expect(items[1].sellIn).toBe(1);
    expect(items[1].quality).toBe(1);
    expect(items[2].name).toBe("Elixir of the Mongoose");
    expect(items[2].sellIn).toBe(4);
    expect(items[2].quality).toBe(6);
    expect(items[3].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[3].sellIn).toBe(0);
    expect(items[3].quality).toBe(80);
    expect(items[4].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[4].sellIn).toBe(-1);
    expect(items[4].quality).toBe(80);
    expect(items[5].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[5].sellIn).toBe(14);
    expect(items[5].quality).toBe(21);
    expect(items[6].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[6].sellIn).toBe(9);
    expect(items[6].quality).toBe(49);
    expect(items[7].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[7].sellIn).toBe(4);
    expect(items[7].quality).toBe(50);
    expect(items[8].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[8].sellIn).toBe(-1);
    expect(items[8].quality).toBe(0);
    expect(items[9].name).toBe("Conjured Mana Cake");
    expect(items[9].sellIn).toBe(2);
    expect(items[9].quality).toBe(4);
    expect(items[10].name).toBe("Conjured Mana Cake");
    expect(items[10].sellIn).toBe(-2);
    expect(items[10].quality).toBe(2);
    expect(items[11].name).toBe("Conjured Mana Cake");
    expect(items[11].sellIn).toBe(-2);
    expect(items[11].quality).toBe(0);
  });
});
