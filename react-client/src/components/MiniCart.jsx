import { useSelector } from "react-redux";
import "../css/minicart.css"
import ecommerceStore from "../store";
import MinicartProduct from "./MinicartProduct";

const MiniCart = ({showMinicart}) => {
    const { productIDs } = useSelector((ecommerceStore) => ecommerceStore.bag)
    const allProducts = useSelector((ecommerceStore) => ecommerceStore.products)
    // console.log('allProducts', allProducts);
    let cartProducts = []
    productIDs.forEach((pid)=>{
        cartProducts.push(allProducts.find((product) => product.id == pid));
    })

    return (
        <div className={`minicart-container ${!showMinicart ? "d-none": ''}`}>
            {cartProducts.map((prod) => {
                return <MinicartProduct key={prod.id} product={prod}/>
            })}
        </div>
    );
}

export default MiniCart;
