const postcssImport = require('postcss-import')
const postcssCalc = require('postcss-calc')
const autoprefixer = require('autoprefixer')
const colorFunction = require('postcss-color-function')
const precss = require('precss')
const paths = require('./paths')

module.exports = [
  postcssImport({ path: paths.appSrc }),
  precss({
    parser: require('postcss-scss')
  }),
  postcssCalc(),
  colorFunction(),
  autoprefixer({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9' // React doesn't support IE8 anyway
    ]
  })
]
