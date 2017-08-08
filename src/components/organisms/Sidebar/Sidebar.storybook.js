import React from 'react'
import { storiesOf } from '@storybook/react'

import Sidebar from './Sidebar'

storiesOf('Sidebar', module)
 .add('default view', () => (
    <Sidebar />
  ))