import React,  { Component } from 'react';
import Cell from "./Cell.js"

export default class Table extends Component {
  renderTableHeaders = (_cell, cellIndex) => {
    const {headings} = this.props;

    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
      />
    )
  };

  renderTableRows = (_row, rowIndex) => {
    const {rows} = this.props;

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
            />
          )
        })}
      </tr>
    )
  };

  render() {
    const {headings, rows} = this.props;

    var tableHeaders = this.renderTableHeaders.bind(headings);
    var tableRows = this.renderTableRows.bind(rows);

    const theadMarkup = (
      <tr key="heading">
        {headings.map(tableHeaders)}
      </tr>
    );

    const tbodyMarkup = rows.map(tableRows);

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>{theadMarkup}</thead>
          <tbody>{tbodyMarkup}</tbody>
        </table>
      </div>
    );
  }
}
