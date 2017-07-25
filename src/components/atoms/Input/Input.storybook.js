import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from './Input'

const defaultInfoProps = {
  inline: true,
  maxPropsIntoLine: 2,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
}

storiesOf('Input', module)
  .addWithInfo(
    'text',
    () => <Input type="text" elementId="email" />,
    defaultInfoProps
  )
  .addWithInfo(
    'password',
    () => <Input type="password" elementId="senha"/>,
    defaultInfoProps
  )
