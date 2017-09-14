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

router.put("/api/vendor/money/:itemId", function(req, res) {
  models.moneys
    .find({
      where: {
        id: req.params.itemId
      }
    })
    .then(function(moneys) {
      moneys.totalmoney = req.body.totalmoney
      moneys.save().then(function(money) {
        res.json({ money: money })
      })
    })
    .catch(function(error) {
      res.status(404).json({ errorMessage: "ERROR" })
    })
})

module.exports = router
