
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

const getCommodity = (type) => {
  return Commodities.find(c => c.type === type);
}

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
]);

export { CommodityTypes, getCommodity };
export default Commodities;