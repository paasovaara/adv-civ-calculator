import React, {useState} from "react";
import PropTypes from "prop-types";
import classes from "./CountSelector.module.css";

const CountSelector = (props) => {

  const reduce = () => {
    props.count > 0 ? props.setCount(props.count - 1): props.setCount(0);
    props.onReduce();
  }

  const increment = () => {
    props.count >= props.max ? props.setCount(props.max): props.setCount(props.count + 1)
    props.onIncrement();
  }

  return (
    <div className={classes.CountSelector}>
      <button onClick={reduce}> 
        -
      </button>
      <p>{props.count}</p>
      <button onClick={increment} >
        +
      </button>
    </div>
  )
};

CountSelector.propTypes = {
  max: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default CountSelector;