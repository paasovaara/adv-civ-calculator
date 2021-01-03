
const CommodityTypes = Object.freeze({
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

const Commodities = Object.freeze([
  {
    type: CommodityTypes.Ochre,
    name: "Ochre",
    values: [1, 4, 9, 16, 25, 36, 49],
    count: 7
  },
  {
    type: CommodityTypes.Hides,
    name: "Hides",
    values: [1, 4, 9, 16, 25, 36, 49],
    count: 7
  },
  {
    type: CommodityTypes.Iron,
    name: "Iron",
    values: [2, 8, 18, 32, 50, 72, 98, 128],
    count: 8
  },
  {
    type: CommodityTypes.Papyrus,
    name: "Papyrus",
    values: [2, 8, 18, 32, 50, 72, 98],
    count: 7
  },
  {
    type: CommodityTypes.Salt,
    name: "Salt",
    values: [3, 12, 27, 48, 75, 108, 147, 192, 243],
    count: 9
  },
  {
    type: CommodityTypes.Timber,
    name: "Timber",
    values: [3, 12, 27, 48, 75, 108, 147, 192],
    count: 8
  },
  {
    type: CommodityTypes.Grain,
    name: "Grain",
    values: [4, 16, 36, 64, 100, 144, 196, 256],
    count: 8
  },
  {
    type: CommodityTypes.Oil,
    name: "Oil",
    values: [4, 16, 36, 64, 100, 144, 196],
    count: 7
  },
  {
    type: CommodityTypes.Cloth,
    name: "Cloth",
    values: [5, 20, 45, 80, 125, 180, 245],
    count: 7
  },
  {
    type: CommodityTypes.Wine,
    name: "Wine",
    values: [5, 20, 45, 80, 125, 180],
    count: 6
  },
  {
    type: CommodityTypes.Bronze,
    name: "Bronze",
    values: [6, 24, 54, 96, 150, 216],
    count: 6
  },
  {
    type: CommodityTypes.Silver,
    name: "Silver",
    values: [6, 24, 54, 96, 150],
    count: 5
  },
  {
    type: CommodityTypes.Spices,
    name: "Spices",
    values: [7, 28, 63, 112, 175, 252],
    count: 6
  },
  {
    type: CommodityTypes.Resin,
    name: "Resin",
    values: [7, 28, 63, 112, 175],
    count: 5
  },
  {
    type: CommodityTypes.Gems,
    name: "Gems",
    values: [8, 32, 72, 128, 200],
    count: 5
  },
  {
    type: CommodityTypes.Dye,
    name: "Dye",
    values: [8, 32, 72, 128],
    count: 4
  },
  {
    type: CommodityTypes.Gold,
    name: "Gold",
    values: [9, 36, 81, 144, 225],
    count: 5
  },
  {
    type: CommodityTypes.Ivory,
    name: "Ivory",
    values: [9, 36, 81, 144],
    count: 4
  },
]);

const getCommodity = (type) => {
  return Commodities.find(c => c.type === type);
}

export { CommodityTypes, getCommodity };
export default Commodities;