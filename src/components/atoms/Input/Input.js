import React from 'react'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

import './Input.css'

const Input = props => (
  <div className="input-container">
    <input className="" required id={props.elementId} type={props.type}></input>
    <label className="label-field" htmlFor={props.elementId}>
      {capitalizeFirstLetter(props.elementId)}
    </label>
  </div>
)

export default Input