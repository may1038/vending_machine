const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/api/customer/items", function(req, res) {
  models.vendingItems.findAll().then(function(items) {
    res.json(items)
  })
})

//use postman to imput items into table in JSON format
//for postman, change to post, headers = key -> Content-Type values -> application/json, then click raw for body and type our your object
router.post("/api/vendor/items", function(req, res) {
  const newVending = models.vendingItems.build({
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity,
    desc: req.body.desc
  })
  newVending.save().then(function(newItems) {
    res.json({ success: true })
  })
})

module.exports = router
