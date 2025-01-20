import { useEffect, useState } from 'react'
import './Self.css'
import Fade from '@material-ui/core/Fade'
export const Self=()=>{ 

    const [cmplimnts,setcmps]=useState([])

    const _fch=async()=>{
        const res=await fetch("http://localhost:200/fetch/cmnts",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=await res.json()
        setcmps(data) 
        console.log(data)
    }

    useEffect(()=>{
        _fch()
    },[])
    return<>
        <div className="self">
        </div>
        <div className="content">
            <div className="cmnts">
                <ul className='ul'>
                    {cmplimnts.map((i)=>{
                        return<>
                        <div className='reviews'></div>
                            <div key={i.message} className='item'>
                                <h5 className='rev-name'>{i.name}</h5>
                                <h2 className='rev-msg'>{i.message}</h2>
                            </div>
                            <div className="details">
                                <p className='details-p'>{i.email}</p>
                                <p className='details-p'>{i.phone}</p>
                            </div>
                        </>
                    })} 
                </ul> 
            </div>
            <div className="myself">
                <h1 className='i'>I'm</h1>
                <h1>Samarth</h1>
                <h1>Saxena .</h1>
                <p>Software Engineer</p>
                <p className='last'>@Tech Mahindra</p>
            </div>
            <div className="profiles">
                <a id='links' href="https://leetcode.com/u/samarth0777/" target='blank'><img id="leetcode" src="Leetcode.png" alt="" /></a>
                <a id='links' href="https://www.geeksforgeeks.org/user/samarthsaxena0777/" target='blank'><img id='leetcode' src="GFG.png" alt="" /></a>
                <a id='links' href="https://github.com/Samarth0777" target='blank'><img id='leetcode' src="Github.png" alt="" /></a>
                <a id='links' href="https://www.linkedin.com/in/samarth-saxena-a6a553218/" target='blank'><img id='leetcode' src="Linkedin.png" alt="" /></a>
                <a id='links' href="https://www.instagram.com/saxena_samarth/" target='blank'><img id='leetcode' src="Insta.png" alt="" /></a>
            </div>
        </div>
    </>
}