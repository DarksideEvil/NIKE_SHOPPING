import React from 'react'
import '../home/home.css'
import Card from '../../component/card/index'
import Baza from '../../baza.json'

function Home(){
    return(
        <div className='container py-5'>
            <div className="row d-flex justify-content-between">
            {
                Baza.map((item)=>{
                    return(
                        <Card 
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            card = {item}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}
export default Home