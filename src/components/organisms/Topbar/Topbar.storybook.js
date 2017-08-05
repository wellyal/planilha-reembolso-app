import React from 'react'
import { storiesOf } from '@storybook/react'

import Topbar from './Topbar'

storiesOf('Topbar', module)
 .add('default view', () => (
    <Topbar />
  ))