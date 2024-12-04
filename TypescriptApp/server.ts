// import modules and json files
import express from "express"
import productList from "./data/product.json"
import path from "path"

// create server constants
const app = express()
const WEBROOT = path.join(__dirname, `my-app`, `build`) // This is a built version of the react app - run: | npm run build | in the my-app section for the path to be valid
const PORT = 5000

//serve the products.json
app.route(`/products/:id?`).get((req, res) => {
    if(req.params.id === undefined) {
        res.json(productList)
    }
})

// listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
