import React from "react";

import classes from "./ValueTable.module.css";

const ValueTable = (props) => {
  const values = [1, 4, 9, 16, 25, 36, 49]; //TODO get from props

  const rowCount = 2; // Always 2;
  const colCount = Math.ceil(values.length / 2);

  const createRow = (rowValues) => {
    return rowValues.map((value, index) => {
      return <td>{value}</td>;
    });
  }

  const createHtmlTable = () => {
    return (
      <table>
        <tbody>
          <tr>{createRow(values.splice(0, colCount))}</tr>
          <tr>{createRow(values)}</tr>  
        </tbody>      
      </table>
    );
  }

  return (
    <div className={classes.ValueTable}>
      {createHtmlTable()}
    </div>
  );
}

export default ValueTable;