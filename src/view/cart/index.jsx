import React from 'react'
import '../cart/cart.css'
import CartItem from '../../component/item/index'
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom'

function Cart(){
    const{
        items,
        cartTotal,
        isEmpty
    } = useCart()

    const navigate = useNavigate()

    if(isEmpty) return <p className='cart_empty_txt'>
        Your cart is empty
        <i className="bi bi-cart-plus-fill cart_empty_icn" onClick={()=>navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
            </svg>
        </i>
    </p>
    return(
        <div className='container py-5'>
            {items.map((item) =>{
                return(
                    <CartItem 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    qty={item.quantity}
                    total={item.itemTotal}
                    card={item}
                    />
                )
            })}
            <h1 className='cart_total text-danger text-center py-3 my-5 bg-light'>𝘛𝘖𝘛𝘈𝘓: {cartTotal}$</h1>
        </div>
    )
}
export default Cart