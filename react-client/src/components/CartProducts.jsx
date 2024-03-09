import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import "../css/cartProducts.css"

const CartProducts = () => {
    const { productIDs } = useSelector((ecommerceStore) => ecommerceStore.bag)
    const allProducts = useSelector((ecommerceStore) => ecommerceStore.products)
    let cartProducts = []
    productIDs.forEach((pid) => {
        cartProducts.push(allProducts.find((product) => product.id == pid));
    })

    return (
        <div className="cart-container">
            {cartProducts.map((product) => <CartProduct key={product.id} product={product}/>)}
        </div>
    );
}

export default CartProducts;
