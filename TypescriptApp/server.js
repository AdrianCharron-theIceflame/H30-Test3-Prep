"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import modules and json files
const express_1 = __importDefault(require("express"));
const product_json_1 = __importDefault(require("./data/product.json"));
const path_1 = __importDefault(require("path"));
// create server constants
const app = (0, express_1.default)();
const WEBROOT = path_1.default.join(__dirname, `my-app`, `build`); // This is a built version of the react app - run: | npm run build | in the my-app section for the path to be valid
const PORT = 5000;
// serve the built react app
app.use(express_1.default.static(WEBROOT));
//serve the products.json
app.route(`/products`).get((req, res) => {
    res.json(product_json_1.default);
});
// listen on port 5555
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
