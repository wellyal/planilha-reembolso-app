import React, { Component } from 'react';
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import cx from 'classnames'

import './SignIn.css'

class SignIn extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.success)
      nextProps.history.push('/app/stylesheet')
  }

  render() {
    const { auth } = this.props
    const buttonClassesName = cx('btn default', { loading: auth.isFetching })

    return (
      <div className="signin-container">
        <div className="signin-form">
          <div className="grid-row">
            <Input type="text" elementId="email" />
          </div>
          <div className="grid-row">
            <Input type="password" elementId="senha" />
          </div>
          <div className="grid-row">
            <Button className={buttonClassesName} onClick={this.signin}>Entrar na Planilha</Button>
          </div>
        </div>
      </div>
    )
  }

  signin = () => this.props.signin()
}

export default SignIn;
