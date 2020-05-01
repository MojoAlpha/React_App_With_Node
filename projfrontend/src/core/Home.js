import React, {useState, useEffect} from 'react';
import '../styles.css'
import {API} from '../backend';
import Base from './Base';
import Card from './card';
import { getProducts } from './helper/coreapicalls';
import mainPic from './bg3.jpg'
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg'
import slide3 from './slide3.png'
import slide4 from './slide4.jpg'
import slide5 from './slide5.jpg'
import slideShowImages from './script';


function Home() {
  require('./style-home.css')

    return (
      <Base title='Home Page' description='Welcome to the T-Shirt Store'>
      <div className="grid-container">
      <div className="grid-item">
          <img src={mainPic} alt='IMG' />
          <div className="top">
             <h1>Design Reflects What You Are</h1> 
             <h4>We At Odrio Believe That What You Wear Reflects A Major Part Of Your Personality</h4>
             <h4 className="shop-btn" style={{'marginTop': '2em', 'color': '#4C5355'}}>SHOP NOW</h4>
          </div>
      </div>
  </div>
  <div className="keys">
      <div className="key-el">
          <img src="https://img.icons8.com/pastel-glyph/50/000000/cargo-ship--v2.png" alt='Ship' />
          <h1>Free Shipping </h1>
          <h3 style={{"textAlign": "center"}}>We Provide All Our Customers With A Free Shipping Of Order WorldWide</h3>
          <p></p>
      </div>
      <div className="key-el">
          <img src="https://img.icons8.com/ios/50/000000/coins.png" alt='Coins' /> 
          <h1 style={{"fontWeight": "900"}}>Money Back Guarantee</h1>
          <h3 style={{"textAlign": "center"}}>We Guarantee The Safe Return Of Your Money At All Costs As Soon As Possible</h3>
      </div>
      <div className="key-el">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/online-support.png" alt='Online' style={{"width": "35%"}} />
          <h1>Online Support</h1>
          <h3 style={{"textAlign": "center"}}>A Team Of Trained Professionals Is Availble To You 24X7</h3>
      </div>
  </div>
  <div className="slide-container">
      <div>
          <h1 className="anim" style={{"fontFamily": "Cardo", "letterSpacing": "0.1em", "fontSize": "2vw"}}>FEATURED COLLECTIONS</h1>
      </div>
      {slideShowImages()}
  <div className="slide-show">
  <img src={slide1} alt='show' />
  <img src={slide2} alt='show' />
  <img src={slide3} alt='show' />
  <img src={slide4} alt='show' />
  <img src={slide5} alt='show' />   
  </div>
 </div>
     <div className="best"><h1>LEADING FOR A REASON...</h1>
   <h3 style={{"textAlign": "center", "color": "#666"}}>
      We Provide You With The Finest Fabrics In Affordable Prices.<br />
       At <span style={{"color": "#C44B4F"}}>ODRIO</span> We Bring Your Fantasies To Life
   </h3>
  </div>
      </Base>
    )
}

export default Home;