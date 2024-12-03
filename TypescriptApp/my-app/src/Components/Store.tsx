import Product from "./Propduct"
import "../Styles/Store.css"
type StoreProps = {
    products: { ProductId: number, StockNumber: string, Description: string, Inventory: number, Cost: number }[]
}
export default function Store(props: StoreProps) {
    const { products } = props
    return (
        <div className="store">
            <h2>My Amazing Super Store</h2>
            <div className="inv">
                {products.map(el => (<Product key={el.ProductId} product={{ StockNumber: el.StockNumber, Description: el.Description, Inventory: el.Inventory, Cost: el.Cost }} />))}
            </div>
        </div>
    )
}