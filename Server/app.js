const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mustache = require("mustache-express")
app.use(bodyParser.json())

const items = require("./Router/items")
app.use(items)

const update = require("./Router/update")
app.use(update)

const money = require("./Router/money")
app.use(money)

app.listen(3000, function(req, res) {
  console.log("do work")
})
