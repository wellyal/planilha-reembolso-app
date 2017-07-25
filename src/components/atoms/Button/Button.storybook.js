import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const defaultInfoProps = {
  inline: true,
  maxPropsIntoLine: 2,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
}

storiesOf('Button', module)
  .addWithInfo(
    'default',
    () => <Button onClick={action('clicked')}>Default Button</Button>,
    defaultInfoProps
  )
  .addWithInfo(
    'loading',
    () => <Button className="btn default loading">Default Button</Button>,
    defaultInfoProps
  )
