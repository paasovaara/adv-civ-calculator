import React, { Fragment, useState } from "react";
import classes from "./CommodityCard.module.css";


const CommodityCard = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.CommodityCard}>
      <h2>{props.type}</h2>
      <button onClick={() => count > props.max ? setCount(props.max): setCount(count + 1)} >
        +
      </button>
      <p>{count}</p>
      <button onClick={() => count > 0 ? setCount(count - 1): setCount(0)}> 
        -
      </button>
    </div>
  );
}

export default CommodityCard;