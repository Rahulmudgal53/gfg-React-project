import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigat = useNavigate()
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>
                <h2 onClick={()=>{navigat('/')}}>E-SHOP</h2>
            </div> 
            <div className='shoppingBag'>
                    <i className='shopping bag icon'></i>
                    <span className='cartCount'>0</span>
            </div>       
        </div>
    );
}

export default Header;