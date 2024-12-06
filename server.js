const express = require('express')
const app = express()
const port = 3000
require ('./route/user.rote')


app.listen(port, () => console.log("running") )