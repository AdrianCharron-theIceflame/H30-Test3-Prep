import React from "react"
import "../Styles/Store.css"
import Product from "./Product"
import Open from "./Open"
export default function Store(props) {
    const { products } = props
    return (
        <div className="store">
            <h2>Welcome to my amazing store!</h2>
            <Open />
            <div className="inv">
                {products.map(el => (<Product key={el.ProductId} product={{ StockNumber: el.StockNumber, Description: el.Description, Inventory: el.Inventory, Cost: el.Cost }} />))}
            </div>
        </div>
    )
}