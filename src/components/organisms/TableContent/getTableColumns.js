import React from 'react'

export const getTableColumns = (handleCheckboxClick) =>
  [{
    Header: 'Ações',
    accessor: 'checkbox',
    Cell: value => {
      return (
        <input type="checkbox" onClick={ handleCheckboxClick.bind(this, value) } />
      )
    }
  }, {
    Header: 'Data',
    accessor: 'date'
  }, {
    Header: 'Categoria',
    accessor: 'category'
  }, {
    Header: 'Valor',
    accessor: 'value'
  }, {
    Header: 'Comentario',
    accessor: 'comments'
  }]