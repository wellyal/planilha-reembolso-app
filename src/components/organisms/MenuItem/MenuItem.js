import React from 'react'
import Item from 'components/molecules/Item'
import './MenuItem.css'

const MenuItem = () => (
  <nav className="sidebar-container__list">
    <Item header>Relatórios</Item>
    <Item item>Jul/2017</Item>
    <Item item>Ago/2017</Item>
    <Item item>Set/2017</Item>
    <Item item>Out/2017</Item>
    <Item item>Nov/2017</Item>
  </nav>
)

export default MenuItem