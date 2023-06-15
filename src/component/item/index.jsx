import '../item/item.css'
import { useCart } from 'react-use-cart'

function CartItem(props){
    const {
        removeItem,
        updateItemQuantity
    } = useCart()
    return(
        <div className="container d-flex justify-content-center">
        <div className='col-md-10'>
            <div className="row cart_items bg-light py-4 my-3 d-flex justify-content-center">
                <div className="col-md-3 d-flex justify-content-center">
                    <img src={props.img} alt=""  className='cartitem_img'/>
                </div>
                <div className="col-md-8">
                    <h2 className='unknown'>{props.title}</h2>
                    <p className='unknown'>{props.desc}</p>
                    <button className='btn btn-secondary mx-2'
                    onClick={()=>updateItemQuantity(props.card.id, props.card.quantity - 1)}
                    > - </button>{props.qty}<button className='btn btn-secondary mx-2'
                    onClick={()=>updateItemQuantity(props.card.id, props.card.quantity + 1)}
                    > + </button> X {props.price} = {props.total} $
                </div>
                <div className="col-md-1">
                    <h3 className='cItemDelete d-inline-block'
                    onClick={()=>removeItem(props.card.id)}
                    >
                        <i className="bi bi-x-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </i>
                    </h3>
                </div>
            </div>
        </div>
        </div>
    )
}
export default CartItem