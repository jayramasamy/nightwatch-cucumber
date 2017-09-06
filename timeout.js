const {defineSupportCode} = require('cucumber')

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(70 * 1000)
})