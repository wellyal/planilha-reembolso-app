import React, { Component } from 'react';
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'

import './SignIn.css'

class SignIn extends Component {
  render() {
    console.log('bla', this.props.test)
    return (
      <div className="SignIn">
        <div className="form">
          <div className="row">
            <Input type="text" elementId="email" />
          </div>
          <div className="row">
            <Input type="password" elementId="senha" />
          </div>
          <div className="row-buttom">
            <Button className="btn default" onClick={this.signin}>Entrar na Planilha</Button>
          </div>
        </div>
      </div>
    )
  }

  signin = () => this.props.setSuccess()
}

export default SignIn;
