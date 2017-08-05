import React, { Component } from 'react'
import { makeData } from 'utils/makeData'
import { getTableColumns } from './getTableColumns'
// Import React Table
import ReactTable from "react-table"
import "react-table/react-table.css"

import './TableContent.css'

export default class TableContent extends Component {

  state = {
    data: makeData()
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <ReactTable
          data={data}
          columns={getTableColumns()}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    )
  }
}
