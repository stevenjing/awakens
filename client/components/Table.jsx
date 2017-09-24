import React from 'react';
import { render } from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import "../styles/commonStyles.scss"

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];

export default class Table extends React.Component {

  
  
  render() {
    return (
      <BootstrapTable data={products} striped hover>
        <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
     );
  }
}
