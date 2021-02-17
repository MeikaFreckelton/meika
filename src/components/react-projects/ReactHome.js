import React from 'react'
import {Link } from 'react-router-dom'
import ReactNav from './ReactNav'

import './../../styles/App.css'
import './../../styles/businessCard.css'


const ReactHome = () => {

    
    const divStyles = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width:"80%",
        margin: "3% auto",
        textAlign: "center"


    }



    return(
        <div>

                <ReactNav />
            <div className="wrapperStyles">
                <div className="heading">
                    <h1>REACT PROJECTS</h1>
                </div>
                <div style={divStyles} className="divStyles">
                    <Link to="/projects" className="btnStyles">Back to Projects</Link>
                    <Link to="/projects/react/yellingGreeter" className="btnStyles">Yelling Greeter</Link>
                    <Link to="/projects/react/happyMessage" className="btnStyles">Happy Message</Link>
                    <Link to="/projects/react/businesscard" className="btnStyles">Business Card</Link>
                    <Link to="/projects/react/cookieclicker" className="btnStyles">Cookie Clicker</Link>
                    <Link to="/projects/react/todolist" className="btnStyles">To Do List</Link>
                    <Link to="/projects/react/billandtip" className="btnStyles">Bill and Tip</Link>
                    <Link to="/projects/react/movielist" className="btnStyles">Movie List</Link>
                </div>
                    
            </div>
        </div>
    )
}

export default ReactHome