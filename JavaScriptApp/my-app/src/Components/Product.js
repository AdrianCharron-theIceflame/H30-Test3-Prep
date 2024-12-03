import React from "react"
import "../Styles/Product.css"
export default function Product(props) {
    const { product } = props
    if (product.Inventory >= 50)
        return (
            <div className="product">
                <p>Stock Number: {product.StockNumber}</p>
                <p>Description:<br />{product.Description}</p>
                <p>Inventory: {product.Inventory}<br />{product.Inventory > 100 ? `We have plenty!` : `We have some.`}</p>
                <p>Cost: {product.Cost}</p>
            </div>
        )
    else return null
}