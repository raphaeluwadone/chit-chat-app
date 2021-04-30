import React from 'react'
import "./nav.css"
import Image from "../../video/brand.jpg"

function Nav() {
    return (
        <>
            <div className="w-screen nav-color p-6 flex h-24 items-center justify-around">
                <div className="logo bg-green-100 w-16">
                    <img src={Image} alt="" className=""/>
                </div>
                <p className="tagline italic font-black text-xl">Chit-Chat!</p>
            </div>
        </>
    )
}

export default Nav
