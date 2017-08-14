import React from 'react'
import { storiesOf } from '@storybook/react'

import Item from './Item'

storiesOf('Item', module)
 .add('default view', () => (
    <Item item>Bla</Item>
  ))