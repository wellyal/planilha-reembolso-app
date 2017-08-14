import React, { Component } from 'react'
import { getTableColumns } from './getTableColumns'
import ReactTable from "react-table"
import Button from 'components/atoms/Button'
import "react-table/react-table.css"

import './TableContent.css'

export default class TableContent extends Component {
  state = {
    tableData: this.props.expenses,
    selectedData: []
  }

  render() {
    console.log(this.state.selectedData)
    return (
      <div className="table-container">
        <div className="stylesheet-container__header">
          <div className="stylesheet-container__header__buttons">
            <Button className="btn secondary small">Gravar</Button>
            <Button className="btn default small" disabled={ this.isEditAvailable }>
              Editar
            </Button>
            <Button className="btn default small" disabled={ this.isDeleteAvailable }>
              Excluir
            </Button>
          </div>
          <div className="stylesheet-container__header__value">
            <span className="header-label">Valor Total:</span>
            <span className="header-value">800,00</span>
          </div>
        </div>

        <ReactTable
          data={this.state.tableData}
          columns={getTableColumns(this.handleCheckboxClick)}
          defaultPageSize={10}
          pageSizeOptions={[5, 10]}
          className="-striped -highlight"
        />
      </div>
    )
  }

  handleCheckboxClick = row => {
    debugger;
    const currentSelectedData = this.state.selectedData
    const toogledItem = currentSelectedData.findIndex(item => item === row.index)

    const selectedData =
      toogledItem
        ? [
            ...currentSelectedData.slice(0, toogledItem),
            ...currentSelectedData.slice(toogledItem+1)
          ]
        : [ ...currentSelectedData, row.index]

    this.setState({ selectedData })
  }

  isEditAvailable = () => this.state.selectedData.length === 1

  isDeleteAvailable = () => this.state.selectedData.length > 1
}
