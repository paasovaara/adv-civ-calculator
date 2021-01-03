import React, { Fragment, useState } from "react";
import classes from "./CommodityCard.module.css";
import CountSelector from "./CountSelector/CountSelector";


const CommodityCard = (props) => {
  
  return (
    <div className={classes.CommodityCard}>
      <h2>{props.type}</h2>
      <CountSelector max={5} />
    </div>
  );
}

export default CommodityCard;