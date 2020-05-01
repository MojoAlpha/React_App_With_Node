import React, {useState, useEffect} from 'react'
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/cartHelper';
import { Link } from 'react-router-dom';
import StripeCheckoutButton from 'react-stripe-checkout'
import { API } from '../backend';
import { createOrder } from './helper/orderhelper';


const StripeCheckout = ({products, setReload = f => f, Reload = undefined})  => {
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        error: '',
        address: ''
    })
    

    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id
    
    const getFinalPrice = () => {
       let amount =0
       products.map(p => {
           amount = amount + p.price
       })
       return amount;
    }

    const makePayment = (token) => {
        const body = {
            token,
            products
        }
        const headers = {
            'Content-Type' : 'application/json'
        }
        return fetch(`${API}/stripepayment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response);
            const {status} = response;
            console.log('STATUS ', status)
            cartEmpty(() => {
                console.log('Did we got a crash!!')
            })
            setReload(!Reload)
            //call further methods
        }).catch(error => console.log(error))
    }

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutButton
            stripeKey='pk_test_lQ3xZ7rnxIpvxa484kEP1CYu00PwqwXk8Q'
            token={makePayment}
            amount={getFinalPrice() * 100}
            name='Buy TShirts'
            shippingAddress
            billingAddress
            >
            <button className='btn btn-success'>Pay With Stripe</button>
            </StripeCheckoutButton>
        ) : (
            <Link to='/signin'>
              <button className='btn btn-warning'> SignIn</button>
            </Link>
        )
    }

    

    return (
        <div>
        <h3>StripeCheckout Loaded!! {getFinalPrice()} </h3>
        {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;