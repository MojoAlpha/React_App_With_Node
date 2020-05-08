import React, {Component, useState,useEffect} from 'react';
import Base from './Base';
import { isAuthenticated } from '../auth/helper';


function Home() {
  require('./style-home.css')
  const [count, setCount] = useState(1);
  const [reload, setReload] = useState(false)
  const sliding=()=>{
      setTimeout(() => {
          setCount((count+1)%5+1);
      }, 3000);
    }
    useEffect(() => {
        
    },[reload])

    return (
      <Base title='Home Page' description='Welcome to the T-Shirt Store'>
      <div className="grid-container">
          <div className="top grid-item">
             <h1>Design Reflects What You Are</h1> 
             <h4>We At Odrio Believe That What You Wear Reflects A Major Part Of Your Personality</h4>
             {!isAuthenticated() && (
             <h4 className="shop-btn" style={{'marginTop': '2em', 'color': '#4C5355'}}><a href='/signup'>SHOP NOW</a></h4>
             )}
             {
                 isAuthenticated() && (
                    <h4 className="shop-btn" style={{'marginTop': '2em', 'color': '#4C5355'}}><a href='/user/dashboard'>SHOP NOW</a></h4>
                 )}
          </div>
          <div className='main-img grid-item'><img src='https://github.com/MojoAlpha/React_App_With_Node/blob/master/projfrontend/src/core/bg3.jpg?raw=true' alt='IMG' /></div>

  </div>
  <div className="keys">
      <div className="key-el" style={{position:'relative',top:'min(2vw,1em)'}}>
          <img src="https://img.icons8.com/pastel-glyph/50/000000/cargo-ship--v2.png" alt='Ship' />
          <h1 style={{"textAlign": "center",fontSize:'min(3vw,1.5rem)'}}>Free Shipping </h1>
          <h3 style={{"textAlign": "center",fontSize:'min(2vw,1rem)'}}>We Provide Our Customers With Free Shipping WorldWide</h3>
          <p></p>
      </div>
      <div className="key-el">
          <img src="https://img.icons8.com/ios/50/000000/coins.png" alt='Coins' /> 
          <h1 style={{"textAlign": "center",fontSize:'min(3vw,1.5rem)'}}>Money Guarantee</h1>
          <h3 style={{"textAlign": "center",fontSize:'min(2vw,1rem)'}}>We Guarantee Safe Return Of Your Money At All Costs</h3>
      </div>
      <div className="key-el">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/online-support.png" alt='Online' style={{"width": "35%"}} />
          <h1 style={{"textAlign": "center",fontSize:'min(3vw,1.5rem)'}}>Online Support</h1>
          <h3 style={{"textAlign": "center",fontSize:'min(2vw,1rem)'}}>A Team Of Trained Professionals Is Availble To You 24X7</h3>
      </div>
  </div>
  <div className="slide-container">
      <div>
          <h1 className="anim" style={{"fontFamily": "Cardo", "letterSpacing": "0.1em", "fontSize": "min(2em,4vw)",marginTop:'2vw'}}>FEATURED COLLECTIONS</h1>
      </div>
  <div className="slide-show">
  {sliding()}
    {count==1 && <img src='https://github.com/MojoAlpha/React_App_With_Node/blob/master/projfrontend/src/core/slide1.jpg?raw=true' />}
    {count==2 && <img src='https://github.com/MojoAlpha/React_App_With_Node/blob/master/projfrontend/src/core/slide2.jpg?raw=true' />}
    {count==3 && <img src='https://github.com/MojoAlpha/React_App_With_Node/blob/master/projfrontend/src/core/slide3.png?raw=true' />}
    {count==4 && <img src='https://github.com/MojoAlpha/React_App_With_Node/blob/master/projfrontend/src/core/slide4.jpg?raw=true' />}
    {count==5 && <img src='https://github.com/MojoAlpha/React_App_With_Node/blob/master/projfrontend/src/core/slide5.jpg?raw=true' />}
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