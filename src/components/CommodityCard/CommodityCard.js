import React, { Fragment, useState } from "react";
import classes from "./CommodityCard.module.css";
import CountSelector from "./CountSelector/CountSelector";
import ValueTable from "./ValueTable/ValueTable";

const CommodityCard = (props) => {
  
  return (
    <div className={classes.CommodityCard}>
      <h2>{props.type}</h2>
      <CountSelector max={5} />
      <ValueTable count={4}></ValueTable>
    </div>
  );
}

export default CommodityCard;