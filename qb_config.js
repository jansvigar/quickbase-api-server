const Quickbase = require('quickbase')
const qb_constants = require('./qb_constants')

const qb = new Quickbase({
  realm: qb_constants.QB_REALM,
  apptoken: qb_constants.APP_TOKEN
})

module.exports = qb
