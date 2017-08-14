/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

const requires = require.context('../', true, /storybook\.js$/)

const loadStories = () => requires.keys().forEach(requires)

setAddon(infoAddon)

configure(loadStories, module)

