import {getCommodity, CommodityTypes} from "./Commodities";

test("finds Iron", () => {
  const iron = getCommodity(CommodityTypes.Iron);
  expect(iron.type).toBe(CommodityTypes.Iron);
  expect(iron.name).toBe("Iron");
  expect(iron.values.length).toBe(8);
  expect(iron.count).toBe(iron.values.length);
});
