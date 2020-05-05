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

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)  //tricking the app to reload as sometimes due to many children mounting is not rendering

    useEffect(() => {
        setProducts(loadCart())
    },[reload])  //forcrfully uploading on updating

    const loadAllProducts= () => {
        return (
            <div className='grid-container-cart' style={{'display':'grid', 'grid-template-columns': '32vw 32vw 32vw','gridGap':'1vw','marginLeft':'1vw'}}>
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
        <a href='/user/dashboard' className='main-menu-back' style={{'textDecoration':'none','background':'#333','color':'#fff','fontWeight':'600',
       'padding':'0.5vw 1vw 0.5vw 1vw','borderRadius':'0.5vw','marginLeft':'1vw'}}>Back To Dashboard</a>
       <div><StripeCheckout style={{'float':'right'}} products={products} setReload={setReload} /></div>
        <h2>Cart</h2>
            <div style={{'background':'#999'}}>{loadAllProducts()}
            </div>
        </Base>
    );
}

export default Cart;