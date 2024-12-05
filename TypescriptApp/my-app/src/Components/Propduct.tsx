import "../Styles/Product.css"
type ProductPropTypes = {
    product: {
        StockNumber: string,
        Description: string,
        Inventory: number,
        Cost: number
    }
}
export default function Product(props: ProductPropTypes) {
    const { product } = props
        return (
            <div className="product">
                <p>Product Stock Number: {product.StockNumber}</p>
                <p>Product Description: {product.Description}</p>
                <p>Product Inventory: {product.Inventory} {product.Inventory > 100 ? `We have plenty!` : product.Inventory >= 50 ? `We have some.` : `Nee more!`}</p>
                <p>Product Cost: ${product.Cost}</p>
            </div>
        )
}