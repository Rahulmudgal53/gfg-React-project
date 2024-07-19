import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import axios from 'axios';
import apiCall from '../apis/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/actions/productActions';
import { selectedProduct } from '../redux/actions/productActions';


function ProductDetails(props) {
    const {pid} = useParams()
    console.log(pid);
    
    const dispatch = useDispatch()
    const navigat = useNavigate()
    const product = useSelector(state =>state.product)
    const { id, title, category, price, image, description } = product


    // const productDetail = async() => {
    //     const response = await apiCall.get(`/products/${pid}`)
    //     dispatch(selectedProduct(response.data))
    // }
    // console.log(product);

    useEffect(()=>{
        dispatch(fetchProduct(pid))
    },[pid])
    return (
        <div className='ui grid container'>
            <button onClick={()=>{navigat('/')}}>back</button>
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column 1p'>
                            <img className='ui fluid image' src={image}/>
                        </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag lable'>${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex='0'>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add To Cart</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;