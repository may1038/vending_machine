const express = require("express")
const router = express.Router()
const models = require("../models")

router.post("/api/customer/items/:itemId/purchases", function(req, res) {
  let purchaseMoney = req.body.moneyGiven
  models.vendingItems
    .find({
      where: {
        id: req.params.itemId
      }
    })
    .then(function(item) {
      let change = purchaseMoney - item.cost
      item.quantity -= 1
      item.save().then(function() {
        models.moneys.findAll().then(function(moneys) {
          const moneysRecord = moneys[0]
          if (change >= 0) {
            moneysRecord.totalmoney += item.cost
          }
          moneysRecord.save().then(function(money) {
            res.json({ item: item, money: money })
          })
        })
      })
    })
    .catch(function(error) {
      res.status(404).json(error)
    })
})

module.exports = router
