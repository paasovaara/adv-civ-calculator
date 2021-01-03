import React, { Fragment, useState } from "react";
import classes from "./CommodityCard.module.css";
import CountSelector from "./CountSelector/CountSelector";
import ValueTable from "./ValueTable/ValueTable";

const CommodityCard = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.CommodityCard}>
      <h2>{props.type}</h2>
      <CountSelector max={5} setCount={setCount} count={count}/>
      <ValueTable count={count}></ValueTable>
    </div>
  );
}

export default CommodityCard;