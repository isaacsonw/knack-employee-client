/** @format */

import React, { Component } from 'react';
import _ from 'lodash';
import { ResponsiveTableStyle } from './tableStyle';

let keyOne = 1;
let keyTwo = 1;

class ResponsiveTable extends Component {
  _head = () => {
    let columns = _.map(this.props.columns, (colName, key) => {
      return <th key={key}>{colName}</th>;
    });
    return <tr key={keyOne++}>{columns}</tr>;
  };
  _rows = () => {
    let _this = this;
    const { OnRowClick } = this.props;
    return _.map(_this.props.rows, (row) => {
      let values = _.map(_this.props.columns, (colName, colKey) => {
        return (
          <td
            onClick={() =>
              !React.isValidElement(row[colKey]) ? OnRowClick(row) : null
            }
            key={colKey}
            data-label={colName}>
            {row[colKey]}
          </td>
        );
      });
      return <tr key={keyTwo++}>{values}</tr>;
    });
  };

  render() {
    const { headerSection, loading, rows, footerSection } = this.props;
    if (loading)
      return (
        <>
          {headerSection ? headerSection : null}
          {/* <Loading /> */}
        </>
      );

    if (rows.length === 0) {
      return <>{headerSection ? headerSection : null}</>;
    }
    return (
      <>
        {headerSection ? headerSection : null}
        <ResponsiveTableStyle {...this.props}>
          <thead>{this._head()}</thead>
          <tbody>{this._rows()}</tbody>
        </ResponsiveTableStyle>
        {footerSection ? footerSection : null}
      </>
    );
  }
}

ResponsiveTable.defaultProps = {
  OnRowClick: () => {},
};
export default ResponsiveTable;
