import React from 'react'
import Proptypes from 'prop-types'

import './Button.css'

const Button = props => (
  <button {...props}>{props.children}</button>
)

Button.propTypes = {
  className: Proptypes.string.isRequired,
  onClick: Proptypes.func
}

Button.defaultProps = {
  className: 'btn default',
  onClick: () => null
}

export default Button