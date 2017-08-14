import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'

import Input from './Input'

storiesOf('Input', module)
  .addDecorator(centered)
  .addWithInfo(
    'text',
    () => <Input type="text" elementId="email" />
  )
  .addWithInfo(
    'password',
    () => <Input type="password" elementId="senha"/>
  )
