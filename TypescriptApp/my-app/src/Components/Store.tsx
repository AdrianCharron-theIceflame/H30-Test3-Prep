type StoreProps = {
    products: { ProductId: number, StockNumber: string, Description: string, Inventory: number, Cost: number }[]
}
export default function Store(props: StoreProps) {
    const { products } = props
    return (
        <div id="store">
            <h2>My Amazing Super Store</h2>
        </div>
    )
}