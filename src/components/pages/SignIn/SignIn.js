import React, { Component } from 'react';
import Button from 'components/atoms/Button'
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <Button onClick={this.signin}>Entrar na Planilha</Button>
      </div>
    )
  }

  signin = () => console.log('called')
}

export default SignIn;
