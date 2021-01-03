import React from "react";

import classes from "./ValueTable.module.css";

const ValueTable = (props) => {
  const values = [1, 4, 9, 16, 25, 36, 49]; //TODO get from props
  const selectedValue = (props.count > 0) ? values[props.count - 1] : null;

  const rowCount = 2; // Always 2;
  const colCount = Math.ceil(values.length / 2);

  const createRow = (rowValues) => {
    return rowValues.map((value, index) => {
      const selected = selectedValue === value;
      const cssClass = selected ? classes.SelectedCell : null;
      return <td className={cssClass}>
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