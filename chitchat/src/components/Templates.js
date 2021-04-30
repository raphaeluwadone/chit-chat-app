import React from 'react'
import Nav from "./Nav/Nav"


function Templates(props) {
    return (
        <div className="z-10 absolute top-0">
           <Nav /> 
           {props.children}
        </div>
    )
}

export default Templates
