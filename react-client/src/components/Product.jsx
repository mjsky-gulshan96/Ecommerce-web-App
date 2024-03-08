import React from 'react';
import { useDispatch } from "react-redux";
import { bagActions } from '../store/bag';


const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToBag = (pid) => {
        dispatch(bagActions.addToBag({ pid }))
    }
    return (
        <>
            <div className="card" style={{ "width": "18rem" }}>
                <img className="card-img-top" src={product.images[0]} alt="product image" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                    <button className='btn btn-primary' onClick={() => handleAddToBag(product.id)}>ADD TO BAG</button>
                </div>
            </div>
        </>
    );
}

export default Product;
