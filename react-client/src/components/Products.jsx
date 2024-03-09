import React, { useEffect, useState } from 'react';
import Product from './Product';
import "../css/products.css"
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productActions } from '../store/Products';

const Products = () => {
    const dispatch = useDispatch()
    const products = useLoaderData();
    // console.log('product', products);
    dispatch(productActions.updateProducts({ products }))

    return (
        <div className='product-lists'>
            {products && products.map((product) => { return <Product key={product.id} product={product} /> })}
        </div>
    );
}

export const loadProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => data.products);
}

export default Products;
