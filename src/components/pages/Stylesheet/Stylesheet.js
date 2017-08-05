import React, { Component } from 'react'

import TableContent from 'components/organisms/TableContent'

export default class Stylesheet extends Component {
  state = {
    expenses: null
  }

  componentWillMount() {
    this.setState({
      expenses: this.props.getUserExpenses()
    })
  }

  render() {
    const { expenses } = this.state
    return (
      <div>
        { expenses.isFetching
          ? <div>Loading...</div>
          : <TableContent expenses={expenses.data}/>
        }
      </div>
    )
  }
}