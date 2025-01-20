import './Resume.css'
import x from '/Resume.pdf'
export const Resume=()=>{
    const handle=async()=>{
        const e=document.createElement("a")
        e.href=x
        e.download="Resume.pdf"
        document.body.appendChild(e)
        e.click()
    }
    return<>
    <div className="resume">
    </div>
    <div className="content-resume">
        <h1 className='resume-header'>Resume</h1>
        <p className='resume-para'>Here's my Updated Resume.</p>
        <p className='resume-para'>Click on Download button to view.</p>
        <button className='download' onClick={handle}>DOWNLOAD RESUME</button>
    </div>
    </>
}