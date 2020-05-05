import React, {useState, useEffect, Fragment} from 'react';
import ImageHelper from './helper/ImgHelper';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';


    const Card = ({
        product,
        addtoCart = true,
        removeFromCart = false,
        setReload= f => f,
        reload = undefined
    }) => {

      require('./style-card.css')

      const [redirect, setRedirect] = useState(false)
      const [count, setCount] = useState(product.count)
      const [inCart, setIncart] = useState(false);

      const cardTitle = product ? product.name : "Product Img"
      const cardDescription = product ? product.description : "Default Description"
      const cardPrice = product ? product.price : "Default"
      const cardStock = product ? product.stock : "1"

      
      const addToCart = () => {
        addItemToCart(product, () => setRedirect(true))
      }

      const getARedirect = (redirect) => {
        if(redirect) {
          return <Redirect to='/cart' />
        }
      }

      const showAddToCart = (addtoCart) => {
        return (
          addtoCart && (
            <button
                    onClick={addToCart}
                    className="add-btn"
                  >
                  <img src="https://img.icons8.com/windows/32/000000/shopping-bag-full.png" className='bag' /> <span style={{'position':'relative','top':'-0.2vw'}}>Add to Cart</span>
                  </button>
          )
        )
      }

      const showRemoveFromCart = (removeFromCart) => {

        return (
          removeFromCart && (
            <button
                    onClick={() => {
                      removeItemFromCart(product._id)
                      setReload(!reload)
                    }}
                    className="add-btn"
                  >
                    Remove from cart
                  </button>
          )
        )
      }


        return (
          <div className="item-card">
            <div className="card-title">{cardTitle}</div>
            <div className="card-body">
              <ImageHelper product={product} className='card-img' />
              <div className='price-button'>
              <p className="price">$ {cardPrice}</p>
                <div className="">
                 {showAddToCart(addtoCart)}
                </div>
                <div className="">
                  {showRemoveFromCart(removeFromCart)}
                  {getARedirect(redirect)}
              </div>
              <br />
              </div>
              <p className="card-description">
              <b>Description :-<br /><br /> </b>
                {cardDescription}
              </p>
            </div>
            {
              removeFromCart && (
                <div className='quantity'>
                <label>Quantity : </label><input type='number' defaultValue='1' />
                </div>
              )
            }
            {addtoCart && cardStock!=0 && (
              <span style={{'color':'green','font-weight':'600'}}>In Stock!!</span>
              )}
              {addtoCart && cardStock==0 && (
              <span style={{'color':'Red','font-weight':'600'}}>Out Of Stock!!</span>
            )}
          </div>
        );
      };

export default Card;