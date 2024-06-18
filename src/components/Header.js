import React, { useState } from 'react'
import { FaShoppingCart} from "react-icons/fa"
import Order from './Order'

const showOrders = (props) => {
  return (
    <div>
      {props.order.map(el => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пуста</h2>  
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>ArtShop</span>
            <ul className='nav'>
          
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}` } />

            {cartOpen && (
              <div className='shop-cart'>
                {props.order.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
