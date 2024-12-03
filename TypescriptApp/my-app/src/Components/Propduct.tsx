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
    if (product.Inventory >= 50)
        return (
            <div className="product">
                <p>Product Stock Number: {product.StockNumber}</p>
                <p>Product Description: {product.Description}</p>
                <p>Product Inventory: {product.Inventory} {product.Inventory > 100 ? `We have plenty!` : `We have some.`}</p>
                <p>Product Cost: ${product.Cost}</p>
            </div>
        )
    else return null
}