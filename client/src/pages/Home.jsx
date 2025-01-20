import { Contact } from './Contact'
import { Experience } from './Experience'
import './Home.css'
import { Professional } from './Professional'
import { Projects } from './Projects'
import { Resume } from "./Resume"
import { Self } from "./self"
import { Updates } from './Updates'

export const Home=()=>{
    return<>
    <div className="home" id='home'>
        <Self/>
        <Resume/>
        <Professional/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Updates/>
    </div>
    </>
}