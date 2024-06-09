
const express = require('express')
const app = express()
const port = 3000

app.get('/api/jokes', (req, res) => {
  res.send([
    {
        id:1,
        name:"joke1",
        joke:"joke number 1"

    },
    {
        id:2,
        name:"joke2",
        joke:"joke number 2"

    },
    {
        id:3,
        name:"joke3",
        joke:"joke number 3"

    },
    {
        id:4,
        name:"joke4",
        joke:"joke number 4"

    },
    {
        id:5,
        name:"joke5",
        joke:"joke number 5"

    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})