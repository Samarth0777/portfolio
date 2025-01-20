import './Header.css'
import {useNavigate} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export const Header=()=>{
    const navigate=useNavigate()
    return<>
        <div className="header">
            <AnchorLink href='#home'>
            <p onClick={()=>{navigate('/')}}>Home</p>
            </AnchorLink>
            <AnchorLink href='#port'>
            <p>Portfolio</p>
            </AnchorLink>
            <AnchorLink href='#exp'>
            <p>Experience</p>
            </AnchorLink>
            <AnchorLink href='#contact'>
            <p>Contact</p>
            </AnchorLink>
            <AnchorLink href='#updates'>
            <p>Updates</p>
            </AnchorLink>
        </div>
    </>
}