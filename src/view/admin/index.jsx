import React from 'react';
import '../admin/admin.css';
import Baza from '../../baza.json'
import { useState, useEffect } from 'react';
import Card from '../../component/card';

function Admin(){
    const [data, setData] = useState({
        title: '',
        desc: '',
        price: 0,
        id: Baza.length + 1
    })
    const [baza1 , setBaza1] = useState(Baza)
    const [modal, setModal] = useState('d-none')

    const reset = () => {
        setBaza1([...Baza])
    }

    const submit = (e) => {
        e.preventDefault()
        data.price = data.price * 1
        Baza.push(data)
        reset()
        console.log(Baza)
    }


    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const modalFunction = () => {
        if(modal === 'd-none'){
            setModal('card_add_inp')
            document.body.style.position = 'fixed';             //when modal opens, sidebar disseapers
            document.body.style.top = `-${window.scrollY}px`;
        }else{
            setModal('d-none')
            document.body.style.position = '';
            document.body.style.top = '';
        }
    }
    return(
        <div className='container py-5'>
            <div className="header_add_place text-end mb-5">
                <div className="row">
                    <div className="col-md-10">
                        <i className="bi bi-building-fill-add admin_add_btn" onClick={()=>modalFunction()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-building-fill-add" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z"/>
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div className={modal}>
                <i className="bi bi-x-lg x_btn_admin" onClick={()=>modalFunction()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </i>
                    <div className="card_add_background">
                                <h3 className='inp_inner_txt m-3 text-white'>ADD PRODACT</h3>
                                <form onSubmit={submit}>
                                    <input
                                        type="text"
                                        className='form-control my-2'
                                        placeholder='Title..'
                                        name='title'
                                        value={data.title}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className='form-control my-2'
                                        placeholder='Desc..'
                                        name='desc'
                                        value={data.desc}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className='form-control my-2'
                                        placeholder='Price++'
                                        name='price'
                                        value={data.price}
                                        onChange={changeHandler}
                                        required
                                    />
                                    <div className="send_new_data text-center">
                                        <button className=' data_sender_btn btn btn-success mt-3' onClick={()=>modalFunction()}>ADD</button>
                                    </div>
                                </form>
                    </div>
            </div>
            <div className="row d-flex justify-content-between">
                {
                    baza1.map((item)=>{
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
export default Admin