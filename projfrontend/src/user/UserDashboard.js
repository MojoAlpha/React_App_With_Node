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
        <a href='/'><img className='back' src="https://img.icons8.com/cotton/64/000000/circled-chevron-left.png"/></a>
        <div className='main-head'>
        <h2 style={{margin:'0',fontSize:'2vw',position:'relative',top:'-1vw'}}>Our Great Deals</h2>
        <p style={{fontFamily:'cursive', margin:'0',marginLeft:'1vw'}}>A variety of designs to choose from...</p>
        </div>
          <div className='grid-container2'>
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