import React from "react";
import { CommodityTypes } from "../../models/Commodities";

import CommodityCard from "../CommodityCard/CommodityCard";
import classes from "./WalletLayout.module.css";

const WalletLayout = () => {
  //TODO remove extra div for columns, just add the class to CommodityCard?
  return (
    <div className={classes.WalletLayout}>
      <div className={classes.left}>
        <CommodityCard type={CommodityTypes.Ochre} />       
      </div>
      <div className={classes.right}>
        <CommodityCard type={CommodityTypes.Hides} />       
      </div>
      <div className={classes.left}>
        <CommodityCard type={CommodityTypes.Bronze} />       
      </div>
      <div className={classes.right}>
        <CommodityCard type={CommodityTypes.Dye} />       
      </div>
      <div className={classes.left}>
        <CommodityCard type={CommodityTypes.Gold} />       
      </div>
    </div>
  );
}

export default WalletLayout;