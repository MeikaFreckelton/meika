import React from 'react' 
import { Link } from 'react-router-dom'

const Nav = ({nav}) => {


    const toggleNav = () => {
        const nav = document.querySelector('.nav')
        if (nav.style.display === "none" ){
            nav.style.display = "flex"
        } else {
            nav.style.display = "none"
        }

    }



    

    
    return (
        <div id="navbarA">
            <div className="topBar">

                {
                    nav !== "about" && 
                    <div>
                        <Link to="/"><h1 id="navLogo">MEIKA FRECKELTON</h1></Link>
                    </div>
                }
                <div></div>
                <div className="navItem icon">
                    <i class="far fa-heart" onClick={toggleNav} id="heart"></i>
                </div>
            </div>

            <div className="nav">
                <div className="navItem item">
                    <Link to="/about">ABOUT</Link> 
                </div>
                <div className="navItem item">
                <Link to="/projects">PROJECTS</Link> 
                </div>
                <div className="navItem item">
                    <Link to="/contact">CONTACT ME</Link>
                </div>
            </div>
        </div>
    )
    
    

}

export default Nav