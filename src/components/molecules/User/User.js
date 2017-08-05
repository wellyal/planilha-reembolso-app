import React from 'react'
import profileImg from 'assets/images/profile.jpeg'

import './User.css'

const User = () => {
  return (
    <section className="user-container">
      <span className="user-name user-row">Wellyngton Amaral</span>
      <img alt="imagem perfil" className="user-row" src={profileImg} />
    </section>
  )
}

export default User