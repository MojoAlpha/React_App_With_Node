import React from 'react';
import Menu from './Menu';
 
function Base({
    title='My Title',
    description='My Description',
    children
}){
  require('./style-home.css')
    return(
        <div>
        <Menu />
        <div>
              <div>
                <div>{children}</div>  
              </div>
          </div>
          <div className="footer">
          <div className="foot-grid">
             <div className="foot-cont">
                 <h3>Who We Are?</h3>
                 <p>About Odrio</p>
                 <p>News</p>
                 <p>Awards</p>
                 <p>Investor Relations</p>
                 <p>Careers</p>
                 <p>Odrio Products</p>
                 <p>Press Room</p>
              </div>
             <div className="foot-cont">
              <h3>Need Help?</h3>
              <p>Download Pamplets</p>
              <p>Contact Us</p>
              <p>Our Stores</p>
              <p>Customer Care</p>
              <p>Check Status</p>
              <p>Check Service Availblity</p>
             </div>
             <div className="foot-cont">
              <h3>Community</h3>
              <a href="fb"><img src="https://img.icons8.com/metro/26/000000/facebook-new--v2.png" alt='Icon' /></a>
              <a href="insta"><img src="https://img.icons8.com/metro/26/000000/instagram-new.png" alt='Icon' /></a>
              <a href="utube"><img src="https://img.icons8.com/metro/26/000000/youtube.png" alt='Icon' /></a>
              <a href="tweet"><img src="https://img.icons8.com/android/24/000000/twitter.png" alt='Icon' /></a>
              <a href="mail"><img src="https://img.icons8.com/material/24/000000/gmail.png" alt='Icon' /></a>
             </div>
          </div>
         </div>
        </div>
    )
}

export default Base;