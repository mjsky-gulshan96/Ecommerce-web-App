import "../css/cartProduct.css"
import { RxCross1 } from "react-icons/rx";
import { bagActions } from "../store/bag";
import { useDispatch } from "react-redux";

const CartProduct = ({ product }) => {
    
    const dispatch = useDispatch()
    const handleRemoveBag = (pid) => {
        dispatch(bagActions.remove({pid}))
    }
    return (
        <div className="cart-lineItem">
            <button className="btn btn-light remove-btn"
            onClick={() => handleRemoveBag(product.id)}
            ><RxCross1 /></button>
            <div className="p-title">
                <img src={product.images[0]} alt="cart-prod" />
                <span>{product.title}</span>
            </div>
            <div>Price: {product.price}</div>
            <div>{product.description}</div>
        </div>
    );
}

export default CartProduct;
