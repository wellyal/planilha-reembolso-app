import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon)

const requires = require.context('../src', true, /storybook\.js$/)

const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module)
