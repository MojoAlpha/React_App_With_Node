import React,{useState,useEffect} from 'react';
import Base from '../core/Base';
import {API} from '../backend';
import Card from '../core/card';
import { getProducts } from '../core/helper/coreapicalls';

const UserDashboard = () => {
  require('./style-user.css')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProduct = () => {
    getProducts().then(data => {
      if(data.error){
        setError(data.error)
      }else{
        setProducts(data)
      }
    })
  }

  useEffect(() => {
    loadAllProduct();
  }, [])

    return (
        <Base title='UserDashboard Page'>
          <div className='grid-container2'>
           <div className='grid-items'>
            <img src="https://img.icons8.com/officel/80/000000/user.png" className='user' />
            <span>Edit Your Details</span>
            <h1>Welcome Sir!!</h1>
            <h3>We Provide You With Some Of The World's Finest Fabric Designs...</h3>
            <h3>Hope You Would Have A Great Experience With Us...And Remember To Give Us Your Valuable Feedback...</h3>
            <h4>Seek Help & Support</h4>
            <button className='contact-btn'>Contact Us</button>
           </div>
           <div className='product-list'>
            {products.map((product,index) => {
              return (
                <div className='product-card'>
                   <Card product={product} />
                </div>
              )
            })}
           </div>
          </div>
        </Base>
    )
}

export default UserDashboard;