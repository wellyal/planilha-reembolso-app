import React from 'react'
import cx from 'classnames'

import './Item.css'

const Item = props => {
  const itemClass = cx(
    {'sidebar-container__list__item': props.item},
    {'sidebar-container__list__header': props.header}
  )

  return <div className={itemClass}>{props.children}</div>
}

export default Item