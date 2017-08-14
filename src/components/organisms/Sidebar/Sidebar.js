import React from 'react'
import Button from 'components/atoms/Button'
import MenuItem from 'components/organisms/MenuItem'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <div className="sidebar-container__button">
        <Button>Novo Relatório</Button>
      </div>
      <div className="sidebar-container__content">
        <MenuItem />
      </div>
    </nav>
  )
}

export default Sidebar