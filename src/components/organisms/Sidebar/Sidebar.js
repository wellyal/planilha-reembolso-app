import React from 'react'
import Button from 'components/atoms/Button'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <div className="sidebar-container__button">
        <Button>Novo Relatório</Button>
      </div>
      <div className="sidebar-container__content">
        <ul className="sidebar-container__list">
          <div>Relatórios</div>
          <li>Jul/2017</li>
          <li>Ago/2017</li>
          <li>Set/2017</li>
          <li>Out/2017</li>
          <li>Nov/2017</li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar