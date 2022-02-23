const { Shop, CommonItem, AgedBrie, Sulfuras, BackstagePass, ConjuredItem } = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("CommonItems", function() {
    const gildedRose = new Shop(
      [new CommonItem("CI1", 2, 0),
      new CommonItem("CI2", 3, 4)]
      );
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(1);
    expect(gildedRose.items[0].quality).toBe(0);

    expect(gildedRose.items[1].quality).toBe(3);
  });

  it("ConjuredItems", function() {
    const gildedRose = new Shop(
      [new ConjuredItem("CI1", 2, 0),
      new ConjuredItem("CI2", 3, 4)]
      );
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(1);
    expect(gildedRose.items[0].quality).toBe(0);

    expect(gildedRose.items[1].quality).toBe(2);
  });

  it("AgedBrie", function() {
    const gildedRose = new Shop(
      [new AgedBrie("AB1", 8, 4),
      new AgedBrie("AB2", 2, 50)]
      );
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(7);
    expect(gildedRose.items[0].quality).toBe(5);
    
    expect(gildedRose.items[1].quality).toBe(50);
  });

  it("Sulfuras", function() {
    const gildedRose = new Shop(
      [new Sulfuras("S1", -7, 80)]
      );
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(-7);
    expect(gildedRose.items[0].quality).toBe(80);
  });

  it("BackstagePass", function() {
    const gildedRose = new Shop(
      [new BackstagePass("BSP1", 14, 10),
      new BackstagePass("BSP2", 10, 15),
      new BackstagePass("BSP3", 1, 37),
      new BackstagePass("BSP4", 0, 31),
      new BackstagePass("BSP5", 7, 49)]
      );
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(13);
    expect(gildedRose.items[0].quality).toBe(11);

    expect(gildedRose.items[1].sellIn).toBe(9);
    expect(gildedRose.items[1].quality).toBe(17);

    expect(gildedRose.items[2].sellIn).toBe(0);
    expect(gildedRose.items[2].quality).toBe(40);

    expect(gildedRose.items[3].sellIn).toBe(-1);
    expect(gildedRose.items[3].quality).toBe(0);

    expect(gildedRose.items[4].sellIn).toBe(6);
    expect(gildedRose.items[4].quality).toBe(50);
  });
});
