import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon)

const requires = require.context('../', true, /storybook\.js$/)

const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module)
