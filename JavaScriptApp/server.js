const express = require(`express`)
const productList = require(`./data/product.json`)
const app = express()
const port = 5000

app.route(`/products`).get((req, res) => {
    res.json(productList)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})