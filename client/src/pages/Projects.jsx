import { useNavigate } from 'react-router-dom'
import './Projects.css'
export const Projects=()=>{
    const navigate=useNavigate()
    return<>
        <div className="port" id='port'>
        </div>
        <div className="port-content">
            <h1>Portfolio</h1>
            <div className="head">
                <h2>MY LATEST WORK </h2>
                <p className='see-more'>SEE MORE...</p>
            </div>
            <div className="projects">
                <div className="project" onClick={()=>{navigate('/projects/project1')}}>
                    <h2>Project 1</h2>
                    <p className='desc'>Full Stack MERN website</p>
                </div>
                <div className="project" onClick={()=>{navigate('/projects/project2')}}>
                    <h2>Project 2</h2>
                    <p className='desc'>Chat App</p>
                </div>
                <div className="project" onClick={()=>{navigate('/projects/project3')}}>
                    <h2>Project 3</h2>
                    <p className='desc'>Gesture Recognition</p>
                </div>
            </div>
        </div>
    </>
}