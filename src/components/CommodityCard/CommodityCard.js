import React, { useState } from "react";
import classes from "./CommodityCard.module.css";

import CountSelector from "./CountSelector/CountSelector";
import ValueTable from "./ValueTable/ValueTable";

const CommodityCard = (props) => {
  const [count, setCount] = useState(0);

  const commodity = props.commodity;
  return (
    <div className={classes.CommodityCard}>
      <h2>{commodity.name}</h2>
      <CountSelector 
        max={commodity.count} 
        setCount={setCount} 
        count={count}
        onIncrement={() => props.onIncrement(commodity)}
        onReduce={() => props.onReduce(commodity)}
        />
      <ValueTable count={count} values={commodity.values}></ValueTable>
    </div>
  );
}

export default CommodityCard;