const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath, {extensions: ['html']}))

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})