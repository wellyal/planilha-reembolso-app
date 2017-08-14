import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'

import Button from './Button'

storiesOf('Button')
  .addDecorator(centered)
  .addWithInfo(
    'default',
    () => <Button onClick={action('clicked')}>Default Button</Button>
  )
  .addWithInfo(
    'loading',
    () => <Button className="btn default loading">Default Button</Button>
  )
