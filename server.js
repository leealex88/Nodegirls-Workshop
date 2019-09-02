const express = require('express')
const app = express()
const formidable = require('express-formidable')
const fs = require('fs')
app.use(formidable())

fs.readFile(__dirname + '/data/posts.json', function (error, file){
  const parsedFile = JSON.parse(file)
  console.log(file.toString())
})

const getNewData =


app.post('/create-post', function (req, res){
  console.log(req.fields)
})


app.use(express.static('public'))

app.listen(3000, function () {
  console.log('server is listening on port 3000. Ready to accept requests!')
})

// fs.writenFile('location-of-your-file-goes-here', yourData, function (error){
//
// })


// app.get('/', express.static('public'))
// app.get('/', function (req, res){
//   return express.static('public')(req, res)
// })
//
// app.get('/allaboutyou', function (req, res){
//   res.send('you can do it')
// })
//
// app.get('/node', function (req, res){
//   res.send('node girls')
// })
//
// app.get('/girls', function (req, res){
//   res.send(':)')
// })
