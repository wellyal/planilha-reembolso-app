import React from 'react'
import './Loader.css'

const Loader = () => (
  <div className="loader">
    <div className="loader__container">
      <div className="loader__spin"></div>
      <p>Carregando</p>
    </div>
  </div>
)

export default Loader