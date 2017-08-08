import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableContent from 'components/organisms/TableContent'
import Sidebar from 'components/organisms/Sidebar'
import Loader from 'components/atoms/Loader'

import './Stylesheet.css'

export default class Stylesheet extends Component {
  static propTypes = {
    expenses: PropTypes.shape({
      isFetching: PropTypes.bool,
      success: PropTypes.bool,
      error: PropTypes.object,
      data: PropTypes.array
    })
  }

  static defaultProps = {
    expenses: {
      isFetching: false,
      success: null,
      error: null,
      data: null
    }
  }

  state = {
    expenses: null
  }

  componentWillMount() {
    this.props.getUserExpenses()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      expenses: nextProps.expenses
    })
  }

  render() {
    const { expenses } = this.state
    if(!expenses) return null

    return (
      <div>
        { expenses.isFetching
          ? <Loader />
          : (
              <div className="stylesheet-container">
                <Sidebar />
                <TableContent expenses={expenses.data}/>
              </div>
            )
        }
      </div>
    )
  }
}