import React from "react";

import classes from "./ValueTable.module.css";

const ValueTable = (props) => {
  const values = [...props.values];
  const selectedValue = (props.count > 0) ? values[props.count - 1] : null;

  const rowCount = 2; // Always 2;
  const colCount = Math.ceil(values.length / rowCount);

  const createRow = (rowValues) => {
    return rowValues.map((value, index) => {
      const selected = selectedValue === value;
      const cssClass = selected ? classes.SelectedCell : null;
      return <td key={value} className={cssClass}>
          {value}
        </td>;
    });
  }

  const createHtmlTable = () => {
    return (
      <table className={classes.ValueTable}>
        <tbody>
          <tr>{createRow(values.splice(0, colCount))}</tr>
          <tr>{createRow(values)}</tr>  
        </tbody>      
      </table>
    );
  }

  return (
    <div className={classes.ValueTableContainer}>
      {createHtmlTable()}
    </div>
  );
}

export default ValueTable;