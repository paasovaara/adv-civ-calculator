
export const CommodityTypes = Object.freeze({
  Ochre: "ochre",
  Hides: "hides",
  Iron: "iron",
  Papyrus: "papyrus",
  Salt: "salt",
  Timber: "timber",
  Grain: "grain",
  Oil: "oil",
  Cloth: "cloth",
  Wine: "wine",
  Bronze: "bronze",
  Silver: "silver",
  Spices: "spices",
  Resin: "resin",
  Gems: "gems",
  Dye: "dye",
  Gold: "gold",
  Ivory: "ivory"
});

export class Commodity {
  constructor(type) {
    this.type = type;
  }

  static getCount(type) {
    switch (type) {
      case Ochre: 
      case Hides:
      case Papyrus:
      case Oil:
      case Cloth:
        return 7;
      case Iron:
      case Timber:
      case Grain: 
        return 8;
      case Salt:
        return 9;
      case Wine:
      case Bronze: 
      case Spices:
        return 6;
      case Silver:
      case Resin:
      case Gems:
      case Gold:
        return 5;
      case Dye:
      case Ivory:
        return  4;
    }
    throw new Error("Invalid input for Commodity.getCount: ", type);
  }
  /*
  getPrice() {
    switch (type) {
      case Ochre: 
      case Hides:
        return 1;
        break;
      
    }
  }*/
}