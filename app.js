const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.static('public'))
app.use(fileUpload())

const address = require('os').networkInterfaces()['wlp3s0'][0].address

app.post('/upload', function(req, res) {
  if (req.files.length == 0)
    return res.status(400).send('No files were uploaded.')

  //The name of the input field (i.e. "foo") is used to retrieve the uploaded file
  let File = req.files.foo
  let fileName = req.files.foo.name

  // Use the mv() method to place the file somewhere on your server
  // File.mv(`${__dirname}/${fileName}`, function(err) {
  File.mv(`/media/kiran/34DC27DCDC279760/movies/${fileName}`, function(err) {
    if (err) return res.status(500).send(err)
    console.log(`${fileName} downloaded successfully !`)
    res.send('File uploaded!')
  })
})

app.listen(3000, () => console.log(`Go to ${address}:3000`))
