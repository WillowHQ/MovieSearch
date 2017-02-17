import React from 'react';
import {TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';


const MyTableHeader = () => (
  <TableHeader>
      <TableRow>
        <TableHeaderColumn>TITLE</TableHeaderColumn>
        <TableHeaderColumn>ACTORS</TableHeaderColumn>
        <TableHeaderColumn>YEAR</TableHeaderColumn>
      </TableRow>
    </TableHeader>
)

export default MyTableHeader