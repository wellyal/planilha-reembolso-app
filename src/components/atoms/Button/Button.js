import React from 'react'
import Proptypes from 'prop-types'

import './Button.css'

const Button = props => (
  <button {...props}>{props.children}</button>
)

Object.assign( Button, {
  displayName: 'Button',
  propTypes: {
    className: Proptypes.string.isRequired,
    onClick: Proptypes.func.isRequired
  },
  defaultProps: {
    className: 'btn default'
  }
})

export default Button