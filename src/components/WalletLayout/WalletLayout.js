import React, {useState} from "react";
import { CommodityTypes, getCommodity, Commodities } from "../../models/Commodities";

import CommodityCard from "../CommodityCard/CommodityCard";
import classes from "./WalletLayout.module.css";

const WalletLayout = () => {
  
  const cardCounts = {};
  for (const [key, value] of Object.entries(Commodities)) {
    cardCounts[key] = 0;
  }

  console.log(cardCounts);
  const walletState = {
    cardCounts: cardCounts,
    money: 0
  }

  const [wallet, setWallet] = useState(walletState);

  const calcMoney = (oldTotalMoney, commodity, oldCount, newCount) => {
    const oldValue = (oldCount > 0) ? commodity.values[oldCount - 1] : 0;
    const newValue = (newCount > 0) ? commodity.values[newCount - 1] : 0;
    return oldTotalMoney - oldValue + newValue;
  }

  const incHandler = (commodity) => {
    const counts = {...wallet.cardCounts};
    console.log(counts);
    const oldCount = counts[commodity.type];
    console.log(commodity.type, oldCount);
    
    if (oldCount >= commodity.count) {
      console.error(`WalletLayout:incHandler called for commodity ${commodity} with too large value ${oldCount}`);
      return;
    }
    const newCount = oldCount + 1;
    counts[commodity.type] = newCount;

    const newTotalMoney = calcMoney(wallet.money, commodity, oldCount, newCount);

    const newWallet = { money: newTotalMoney, cardCounts: counts};
    setWallet(newWallet);
  }

  const reduceHandler = (commodity) => {
    const counts = {...wallet.cardCounts};
    console.log(counts);
    const oldCount = counts[commodity.type];
    console.log(commodity.type, oldCount);
    
    if (oldCount === 0) {
      return;
    }
    const newCount = oldCount - 1;
    counts[commodity.type] = newCount;

    const newTotalMoney = calcMoney(wallet.money, commodity, oldCount, newCount);

    const newWallet = { money: newTotalMoney, cardCounts: counts};
    setWallet(newWallet);
  }

  const createCommodityCard = (commodityType, className) => {
    return (<div className={className} key={commodityType}>
      <CommodityCard 
        commodity={Commodities[commodityType]} 
        onIncrement={incHandler} 
        onReduce={reduceHandler}
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