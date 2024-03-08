import React, { useEffect, useState } from 'react';
import Product from './Product';
import "../css/products.css"

const Products = () => {
    const [products, setproducts] = useState([]);
    const getProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setproducts((cvalue) => {
                    cvalue = data.products
                    return cvalue
                })
            });
    }

    useEffect(() => {
        const controller = new AbortController()
        getProducts();
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className='product-lists'>
            {products && products.map((product) => { return <Product key={product.id} product={product} /> })}
        </div>
    );
}

export default Products;
