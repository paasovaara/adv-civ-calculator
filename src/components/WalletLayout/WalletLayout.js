import React from "react";
import { CommodityTypes, getCommodity } from "../../models/Commodities";

import CommodityCard from "../CommodityCard/CommodityCard";
import classes from "./WalletLayout.module.css";

const WalletLayout = () => {
  //TODO remove extra div for columns, just add the class to CommodityCard?
  return (
    <div className={classes.WalletLayout}>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Ochre)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Hides)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Iron)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Papyrus)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Salt)} />       
      </div>
    </div>
  );
}

export default WalletLayout;