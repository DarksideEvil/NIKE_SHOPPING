
import '../card/card.css'
import { useCart } from 'react-use-cart'

function Card(props){
    const {addItem} = useCart();
    return(
        <>
            
                <div className='col-md-3 d-flex m-2 justify-content-between'>
                    <div className='card1 text-center p-3'>
                        <img src={props.img}/>
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        <h3>{props.price} $</h3>
                        <div className="card_add_btn text-end">
                            <i className="bi bi-cart4 card_add_icn" onClick={() => addItem(props.card)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                            </i>
                        </div>
                     </div>
                </div>
            
        </>
    )
}
export default Card