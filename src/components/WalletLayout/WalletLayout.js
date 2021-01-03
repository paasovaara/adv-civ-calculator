import React from "react";
import { CommodityTypes, getCommodity } from "../../models/Commodities";

import CommodityCard from "../CommodityCard/CommodityCard";
import classes from "./WalletLayout.module.css";

const WalletLayout = () => {
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
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Timber)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Grain)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Oil)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Cloth)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Wine)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Bronze)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Silver)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Spices)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Resin)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Gems)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Dye)} />       
      </div>
      <div className={classes.left}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Gold)} />       
      </div>
      <div className={classes.right}>
        <CommodityCard commodity={getCommodity(CommodityTypes.Ivory)} />       
      </div>
    </div>
  );
}

export default WalletLayout;