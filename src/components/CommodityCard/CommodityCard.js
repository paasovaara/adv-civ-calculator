import React, { Fragment } from "react";
import classes from "./CommodityCard.module.css";

const commodityCard = (props) => {
  return (
    <div className={classes.CommodityCard}>
      <p>{props.type}</p>
    </div>
  );
}

export default commodityCard;