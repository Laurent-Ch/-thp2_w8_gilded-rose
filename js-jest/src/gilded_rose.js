const SULFURAS_QUALITY = 80;

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class CommonItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn >= 0) {
      this.quality--;
    }
    else {
      this.quality = this.quality - 2;
    }
    this.sellIn--;
  }
}

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn >= 0) {
      this.quality = this.quality - 2;
    }
    else {
      this.quality = this.quality - 4;
    }
    this.sellIn--;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.quality++;
    this.sellIn--;
  }
}

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn >= 0) {
      if (this.sellin > 10) {
        this.quality = this.quality + 1;
      } 
      else if (this.sellin > 5) {
        this.quality = this.quality + 2;
      }
      else {
        this.quality = this.quality + 3;
      }
    }
    else {
      this.quality = 0;
    }
    this.sellIn--;
  }
}

class Sulfuras extends Item {
  constructor(name, quality) {
    super(name, quality);
    quality = SULFURAS_QUALITY;
  }

  updateQuality() {
    console.log("nothing happens...");
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateQuality() {
    this.items.map(item => {
      item.updateQuality();
    })
  }
}

// Original Code ---------------------------------------------------------------
// class Shop {
//   constructor(items=[]){
//     this.items = items;
//   }
//   updateQuality() {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }

//     return this.items;
//   }
// }
//------------------------------------------------------------------------------
module.exports = {
  Item,
  CommonItem,
  AgedBrie,
  Sulfuras,
  BackstagePass,
  ConjuredItem,
  Shop
}
