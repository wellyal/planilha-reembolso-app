import { configure, setAddon } from '@storybook/react'
// config.js
import infoAddon, { setDefaults } from '@storybook/addon-info';

setAddon(infoAddon)

const requires = require.context('../', true, /storybook\.js$/)

const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module)
