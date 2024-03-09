import "../css/minicartProd.css"
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bag";

const MinicartProduct = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemove = (pid) => {
        dispatch(bagActions.remove({ pid }))
    }
    return (
        <div className="cart-product">
            <div className="cart-product-title">
                <h5>{product.title}</h5>
                <span type="button" className="btn btn-light me-1"
                    onClick={() => handleRemove(product.id)}>
                    <RxCross1 />
                </span>
            </div>
            <img className="cart-product-img" src={product.images[0]} alt="product image" />
            <span className="cart-product-desc">{product.description}</span>
            <p className="cart-product-price">Price: <span>{product.price}</span></p>
        </div>
    );
}

export default MinicartProduct;
