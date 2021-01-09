import React from "react";
import { CommodityTypes, getCommodity } from "../../models/Commodities";

import CommodityCard from "../CommodityCard/CommodityCard";
import classes from "./WalletLayout.module.css";

const WalletLayout = () => {
  const createCommodityCard = (commodityType, className) => {
    return (<div className={className} key={commodityType}>
      <CommodityCard commodity={getCommodity(commodityType)} />       
    </div>);
  };

  let odd = true;
  const commodityCards = [];
  for (const type in CommodityTypes) {
    const className = odd ? classes.left : classes.right;
    const card = createCommodityCard(CommodityTypes[type], className);
    commodityCards.push(card);
    odd = !odd;
  }

  return (
    <div className={classes.WalletLayout}>
      { commodityCards }
    </div>);
}

export default WalletLayout;