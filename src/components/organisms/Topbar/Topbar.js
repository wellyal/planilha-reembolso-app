import React from 'react'
import logoImg from 'assets/images/logo.png'
import User from 'components/molecules/User'

import './Topbar.css'

const Topbar = () => {
  return (
    <section className="topbar-container">
      <div className="topbar-column">
        <img alt="logotipo imagem" src={logoImg} />
      </div>
      <div className="topbar-column">
        <User />
      </div>
    </section>
  )
}

export default Topbar