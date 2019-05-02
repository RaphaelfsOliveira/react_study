const express = require('express')
const BillingCycle = require('../../api/billingCycle/billingCycleServices')

module.exports = server => {
  // Base URL
  const router = express.Router()
  server.use('/api', router)

  // Routes BillingCycle
  BillingCycle.register(router, '/billingCycle')
}
