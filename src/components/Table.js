import React from "react";

function Table(props) {
  return (
    <div>
      <h2>{props.title}</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            {props.columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              {row.map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;