import React from 'react'
import { getTableColumns } from './getTableColumns'
import ReactTable from "react-table"
import "react-table/react-table.css"

import './TableContent.css'

const TableContent = props => {
  return (
    <div className="table-container">
      <ReactTable
        data={props.expenses}
        columns={getTableColumns()}
        defaultPageSize={10}
        pageSizeOptions={[5, 10]}
        className="-striped -highlight"
      />
    </div>
  )
}

export default TableContent
