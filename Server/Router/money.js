const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/api/vendor/money", function(req, res) {
  models.moneys.findAll().then(function(money) {
    res.json(money)
  })
})

router.post("/api/vendor/money", function(req, res) {
  const newMoney = models.moneys.build({
    totalmoney: req.body.totalmoney
  })
  newMoney.save().then(function(money) {
    res.json({ success: true })
  })
})

module.exports = router
