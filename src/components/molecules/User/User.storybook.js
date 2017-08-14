import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

import User from './User'

storiesOf('User', module)
  .addWithInfo(
    'with text', () => <User />
  )