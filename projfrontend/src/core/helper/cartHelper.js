export const addItemToCart = (item, next) => {
    let cart = []
    let dec = true;
    if(typeof window !== undefined) {   //used to check if the script is working inside browser or not
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.map((product,i) =>{
            if(product._id ===item._id)
            dec = false;
        })
        if(dec){
        cart.push({
            ...item,
            count: 1
        })}
        localStorage.setItem('cart', JSON.stringify(cart))
        next();
    }
}

export const loadCart = () => {
    if(typeof window !== undefined) {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }
    }
}

export const removeItemFromCart = (productId) => {
    let cart = []
    if(typeof window !== undefined) {
        if(localStorage.getItem('cart')) {
            cart= JSON.parse(localStorage.getItem('cart'))
        }
    cart.map((product, i) => {
        if(product._id === productId){
            cart.splice(i,1);
        }
    })
    localStorage.setItem('cart',JSON.stringify(cart))
}
return cart;    
}

export const cartEmpty = next => {
    if(typeof window !== undefined) {
        localStorage.removeItem('cart')
    let cart =[]
    localStorage.setItem('cart',JSON.stringify(cart))
    next();
    }
}