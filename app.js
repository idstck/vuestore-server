const express = require('express')
const cors = require('cors')
// create instance node
const app = express()

let corsOptions = {
    origin: "http://localhost:8080"
}
// enable cors
app.use(cors(corsOptions))
// parse request of content-type - application/json
app.use(express.json())
// parse content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Vuestore Server'
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})