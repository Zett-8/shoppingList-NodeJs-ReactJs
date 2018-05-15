const path = require('path');
const keys = require('./config/keys')
const express = require('express')
// to handle with plain text from form
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(keys.mongoURI)

const async = require('async')
const Item = require('./models/item')

app.get('/', (req, res) => {
  if(process.env.NODE_ENV==='production'){
    res.sendFile(path.resolve(__dirname, './client/build'))
  } else {
    res.sendFile(path.resolve(__dirname, './client/public/index.html'))
  }
})

app.post('/post', (req,res,next) => {
  console.log(req.body)
  const items = req.body.itemName

  async.each(items, (eachItem, next) => {
    const item = new Item()
    item.itemname = eachItem
    item.save(err => {
      if(err) throw err
    })
    next()
  }, err => {
    if(err) throw err
  })
})

app.get('/get-items', (req, res) => {
  Item.find({}, (err, users) => {
    res.send(users)
  })
  console.log('"/get-items" returned')
})

app.post('/item-del', (req, res) => {
  Item.remove({_id:req.body.id}, (err) => {
    if(err) console.log(err)
  })
  res.send('delete successed')
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('server worked'))

