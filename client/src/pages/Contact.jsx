import { useState } from 'react'
import './Contact.css'
import {toast} from 'react-toastify'

export const Contact=()=>{
    const [_ins,setIns]=useState({name:'',email:'',phone:0,message:''})
    const [_ai,setai]=useState('')
    const [focus,setFocus]=useState(false)

    //AI Magic
    const _aimagic=async(e)=>{
        setIns({
            ..._ins,
            [e.target.name]:e.target.value
        })

        //AI
        const _resai_=await fetch("http://localhost:200/ai/complete",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({text:_ins.message})
        })
        const _aidata=await _resai_.json()
        console.log(_aidata)
        setai(_aidata.data)
    }

    const handle=async()=>{
        console.log(_ins)

        mongodb
        const _resmongo_=await fetch('http://localhost:200/savemongo',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(_ins)
        })
        const _mongodata=await _resmongo_.json()
        console.log(_mongodata)

        postgres
        const _respg_=await fetch('http://localhost:200/savepg',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(_ins)
        })
        const _pgdata=await _respg_.json()
        console.log(_pgdata)

        //redis
        const _resredis_=await fetch('http://localhost:200/saveredis',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(_ins)
        })
        const _redisdata=await _resredis_.json()
        console.log(_redisdata)

        if(_resmongo_.ok && _resredis_.ok && _respg_.ok)
            toast.success("Thanks for connecting!")

        setIns({
            name:'',
            email:'',
            phone:0,
            message:''
        })
    }
    return<>
        <div className="contact active" id='contact'></div>
        <div className="con-content">
            <div className="con-desc">
                <h1>Contact</h1>
                <h2>Get in touch!</h2>
                <h2>Feel free to reach out with any questions,</h2>
                <h2>collaboration ideas, or just to say hello.</h2>
                <h2>I’d love to hear from you!</h2>
                <p>Tel: +91 7668839597</p>
                <p>samarthsaxena0777@gmail.com</p>
            </div>
            <div className="form">
                <label htmlFor="">Name*</label>
                <input onChange={(e)=>{setIns({..._ins,[e.target.name]:e.target.value})}} value={_ins.name} type="text" name="name" id="" />
                <label htmlFor="">Email*</label>
                <input onChange={(e)=>{setIns({..._ins,[e.target.name]:e.target.value})}} value={_ins.email} type="text" name="email" id="" />
                <label htmlFor="">Phone</label>
                <input onChange={(e)=>{setIns({..._ins,[e.target.name]:e.target.value})}} value={_ins.phone} type="text" name="phone" id="" />
                <label htmlFor="">Comment*</label>
                {focus && _ins.message.length>1 && <div className="ai"><p>{_ai}</p></div>}
                <textarea onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}} onChange={_aimagic} value={_ins.message} type="text" name="message" id="" />
                <button className='submit' onClick={handle}>Submit</button> 
            </div>
        </div>
    </>
}