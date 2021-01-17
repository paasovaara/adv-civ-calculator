import React, {useState} from "react";
import { CommodityTypes, getCommodity, Commodities } from "../../models/Commodities";

import CommodityCard from "../CommodityCard/CommodityCard";
import classes from "./WalletLayout.module.css";

const WalletLayout = () => {
  /*
  const cardCounts = [];
  for (const [key, value] of Object.entries(Commodities)) {
    console.log(`${key}: ${value}`);
    cardCounts.push({ [key]: 0});
  }*/
  const cardCounts = {};
  for (const [key, value] of Object.entries(Commodities)) {
    cardCounts[key] = 0;
  }

  //const cardCounts = Object.entries(Commodities).map((type, commodity) => (type, 0));
  console.log(cardCounts);
  const walletState = {
    cardCounts: cardCounts,
    money: 0
  }

  const [wallet, setWallet] = useState(walletState);

  const incHandler = (commodity) => {
    console.log("inchandler called");
    
    const counts = {...wallet.cardCounts};
    console.log(counts);
    const oldCount = counts[commodity.type].count;
    console.log(commodity.type, oldCount);
    
    if (oldCount >= commodity.count) {
      console.log(`Error, incHandler called for commodity ${commodity} with too large value ${oldCount}`);
      return;
    }

    const newCount = oldCount + 1;
    counts[commodity.type] = newCount;

    const oldTotalMoney = wallet.money;
    const oldValue = commodity.values[oldCount];
    const newValue = commodity.values[newCount];
    const newTotalMoney = oldTotalMoney - oldValue + newValue;

    const newWallet = { money: newTotalMoney, cardCounts: counts};
    setWallet(newWallet);
  }

  //TODO give countSate and the setter to each CommodityCard and replace the state over there..
  const createCommodityCard = (commodityType, className) => {
    return (<div className={className} key={commodityType}>
      <CommodityCard 
        commodity={Commodities[commodityType]} 
        onIncrement={incHandler}
        />       
    </div>);
  };

  let odd = true;
  const commodityCards = [];
  for (const type in CommodityTypes) {
    const className = odd ? classes.left : classes.right;
    const card = createCommodityCard(CommodityTypes[type], className);//TODO Fix CommodityTypes[type]
    commodityCards.push(card);
    odd = !odd;
  }

  return (
    <div className={classes.WalletLayout}>
      <p className={classes.wallet}>Combined value: {wallet.money}</p>
      { commodityCards }
    </div>);
}

export default WalletLayout;