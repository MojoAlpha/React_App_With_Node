import React, {useState, useEffect} from 'react';
import '../styles.css'
import {API} from '../backend';
import Base from './Base';
import Card from './card';
import { getProducts } from './helper/coreapicalls';
import { loadCart } from './helper/cartHelper';
import StripeCheckout from './stripeCheckout';


const Cart =()=> {

    require('./style-cart.css')
    require('../user/style-user.css')

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)  //tricking the app to reload as sometimes due to many children mounting is not rendering

    useEffect(() => {
        setProducts(loadCart())
    },[reload])  //forcrfully uploading on updating

    const loadAllProducts= () => {
        return (
            <div className='product-list' style={{}}>
              {products.map((product, index) => (
                  <Card 
                  key={index}
                  product={product}
                  removeFromCart={true}
                  addtoCart={false}
                  setReload = {setReload}
                  reload={reload}
                  />
              ))}
            </div>
        )
    }

    const loadCheckout = () => {
        return (
            <div>
              
            </div>
        )
    }

    return (
        <Base>
        <a href='/user/dashboard'><img className='back' src="https://img.icons8.com/cotton/64/000000/circled-chevron-left.png"/></a>
       <StripeCheckout style={{'float':'right'}} products={products} setReload={setReload} />
        <h2 className='cart-head'>Shopping Cart</h2>
            <div className='grid-container2'>{loadAllProducts()}
            </div>
        </Base>
    );
}

export default Cart;