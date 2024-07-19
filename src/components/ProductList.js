import React, { useEffect } from 'react';
import Product from './Product';
import {setProducts, cartProducts} from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/productActions';
// import axios from 'axios'
import apiCall from '../apis/apiCall';
// const URL = 'https://fakestoreapi.com/products'

function ProductList(props) {
    const dispatch = useDispatch()
    const {pid} = useParams()

    // const fetchProducts = async() => {
    //     const response = await apiCall.get('/products')
    //     dispatch(setProducts(response.data))
    // }
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return (
        <div className='ui grid container'>
            <Product/>
        </div>
    );
    // const cart = async() => {
    //     const response = await apiCall.get(`/products/${pid}`)
    //     dispatch(cartProducts(response.data))
    // }
}

export default ProductList;