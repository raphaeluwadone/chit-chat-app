import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


function Signup() {
    const [user, setUser] = useState({username: "", password: ""})
    const history = useHistory()
    const userInfo = (e) => {
        let {name, value} = e.target
        setUser({...user, [name]: value})
        console.log(name, value);

    }

    const userLogin = (e) => {
        e.preventDefault()
        const chitUser = JSON.stringify(user)
        localStorage.setItem("chitchat", chitUser);
        history.push("/chat")
    }

    return (
        <div className="w-screen flex justify-center ">
            <div className="rounded-3xl w-4/12 h-96 bg-gray-200 mt-20 border-4 border-blue-400 p-12">
                <form>
                    <input type="text" autoComplete="new-password" placeholder="Enter username..." name="username" value={user.username} onChange={userInfo} className="w-full h-16 my-4 pl-4 focus:outline-none focus:ring-2 rounded-xl focus:ring-blue-400"/>
                    <input type="password" autoComplete="new-password" placeholder="Enter password..." name="password" value={user.password} onChange={userInfo} className="w-full h-16 my-4 pl-4 focus:outline-none focus:ring-2 rounded-xl focus:ring-blue-400"/>
                    <button type="submit" onClick={userLogin} className="w-full h-16 bg-blue-400 mt-6 rounded-xl hover:shadow-md focus:bg-blue-500 transform focus:scale-95 focus:outline-none font-black">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
