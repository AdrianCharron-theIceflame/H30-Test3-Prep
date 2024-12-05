// import modules and json files
import express from "express"
import productList from "./data/product.json"
import path from "path"

// create server constants
const app = express()
const WEBROOT = path.join(__dirname, `my-app`, `build`) // This is a built version of the react app - run: | npm run build | in the my-app section for the path to be valid
const PORT = 5000

app.use(express.static(WEBROOT))

//serve the products.json
app.route(`/products/:id?`).get((req, res) => {
    if (req.params.id) {
        let foundProduct = productList.find(el => el.ProductId === Number(req.params.id))
        if (foundProduct) {
            res.json(foundProduct)
        } else
            res.status(404)
                .send(`<h1>Product Number ${req.params.id} does not exist.`)
    } else res.json(productList)
})

// listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})