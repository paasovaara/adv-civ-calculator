import React, {useState} from "react";
import PropTypes from "prop-types";
import classes from "./CountSelector.module.css";

const CountSelector = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.CountSelector}>
      <button onClick={() => count >= props.max ? setCount(props.max): setCount(count + 1)} >
        +
      </button>
      <p>{count}</p>
      <button onClick={() => count > 0 ? setCount(count - 1): setCount(0)}> 
        -
      </button>
    </div>
  )
};

CountSelector.propTypes = {
  max: PropTypes.number.isRequired
}

export default CountSelector;