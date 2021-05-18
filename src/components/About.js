import React, { useEffect } from 'react' 
import Nav from './Nav'
import { Link } from 'react-router-dom'


const About = () => {

    
    useEffect(() => {
        const logo = document.getElementById("test")
        console.log(logo)
        if (logo) logo.style.display = "none"
    })

    return (
        <div>
            <Nav nav="about"/>
            
            <div className="aboutPage">
                <div className="logoHeading">
                    <Link to="/">MEIKA FRECKELTON</Link>
                </div>
                <div className="aboutTopSection">
                    <div className="imageAndDetails">
                        <div className="profileImage"></div>
                        <div className="details">
                            <div>
                                <i class="fas fa-globe-asia"></i>
                                <p> &nbsp; Sydney</p>
                            </div>
                            {/* <div>
                                <i class="fas fa-calendar-day"></i>
                                <p> &nbsp; 31/03/01</p>
                            </div> */}
                        </div>

                    </div>
                    <div className="aboutMeSection">


                        <div className="aboutMe">
                            <h1>ABOUT ME</h1>
                            <p>
                                I’m Meika Freckelton, a Junior Web Developer and Designer,
                                with a passion for Front-End Development.<br /><br />

                                After studying design for two years and then being
                                introduced to HTML and CSS I was intrigued and 
                                needed to learn more.  <br /><br />

                                After enrolling at Coder Academy I knew I had found 
                                something with endless, exciting learning opportunities 
                                and pathways to take!<br /><br /> Although I’ve only scratched the 
                                surface of tech, I’m eager to learn more about what it has to offer!
                            </p>

                        </div>

                        <div className="interests">
                            <h1>THINGS I LOVE</h1>
                            <p> My pets, strength training, reading, yoga, pottery, video games, painting</p>

                        </div>
                    </div>

                </div>
                <div className="learningPath">
                    <h1>MY LEARNING PATH UNTIL NOW</h1>
                    <div className="timelineWrapper">
                        <div className="timelineYears">
                            
                            <div className="yearItem">
                                <h2>2020<br></br>-21</h2><hr className="line"></hr>
                            </div>
                            <div className="yearItem">
                                <h2>2019</h2><hr className="line"></hr>
                            </div>
                            <div className="yearItem">
                                <h2>2018</h2><hr className="line"></hr>
                            </div>

                        </div>
                        <div className="timeline">
                            <div className="timelineItem">
                                <h2>CODER ACADEMY, SYDNEY</h2>
                                <p>Diploma - Information Technology</p>
                                
                            </div>
                            <div className="timelineItem">
                                <h2>TAFE NEPEAN</h2>
                                <p>Diploma - Graphic Design</p>
                                
                            </div>
                            <div className="timelineItem">
                                <h2>TAFE ULTIMO</h2>
                                <p>Cert IV - Fashion Design</p>
                                <p>Cert III - Design Fundamentals (Fashion)</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div className="skillsSection">
                    <h1>SKILLS</h1>
                    <div className="skillsIcons">
                        <div className="tooltip">
                            {/* <p className="tooltiptext">JavaScript</p> */}
                            <img src={'icons/js.svg'} alt="js"></img>
                        </div>
                        
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Ruby</p> */}
                            <img src={'icons/ruby.svg'} alt="ruby"></img>
                        </div>

                        <div className="tooltip">
                            {/* <p className="tooltiptext">Ruby on Rails</p> */}
                            <img src={'icons/rails.svg'} alt="rails"></img>
                        </div>
                    

                        <div className="tooltip">
                            {/* <p className="tooltiptext">Sass</p> */}
                            <img src={'icons/sass.svg'} alt="sass"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">MongoDB</p> */}
                            <img src={'icons/mongo.svg'} alt="mongoDB"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Express</p> */}
                            <img src={'icons/exp.svg'} alt="express"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">React</p> */}
                            <img src={'icons/react.svg'} alt="react"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Node.js</p> */}
                            <img src={'icons/node.svg'} alt="node"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">HTML</p> */}
                            <img src={'icons/html.svg'} alt="html"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">CSS</p> */}
                            <img src={'icons/css.svg'} alt="css"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Github</p> */}
                            <img src={'icons/github.svg'} alt="github"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Adobe Illustrator</p> */}
                            <img src={'icons/illustrator.svg'} alt="illustrator"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Adobe InDesign</p> */}
                            <img src={'icons/indesign.svg'} alt="indesign"></img>
                        </div>
                        <div className="tooltip">
                            {/* <p className="tooltiptext">Adobe Photoshop</p> */}
                            <img src={'icons/photoshop.svg'} alt="photoshop"></img>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default About