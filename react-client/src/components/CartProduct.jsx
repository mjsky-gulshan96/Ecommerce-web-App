import "../css/cartProduct.css"

const CartProduct = ({product}) => {
    return (
        <div className="cart-lineItem">
            <div className="p-title">
                <img src={product.images[0]} alt="cart-prod" />
                <span>{product.title}</span>
            </div>
            <div>{product.description}</div>
            <div>{product.price}</div>
        </div>
    );
}

export default CartProduct;
