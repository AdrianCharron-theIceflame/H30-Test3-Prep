import React from "react"
import "../Styles/Product.css"
export default function Product(props) {
    const { product } = props
        return (
            <div className="product">
                <p>Stock Number: {product.StockNumber}</p>
                <p>Description:<br />{product.Description}</p>
                <p>Inventory: {product.Inventory}<br />{product.Inventory > 100 ? `We have plenty!` : product.Inventory >= 50 ? `We have some.` : `Need more!`}</p>
                <p>Cost: {product.Cost}</p>
            </div>
        )
}