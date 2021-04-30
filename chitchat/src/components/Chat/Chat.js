import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import { io } from "socket.io-client";
import "./chat.css"
import { GrSend } from "react-icons/gr";


function Chat() {
    const ENDPOINT =  "http://localhost:8080"
    const history = useHistory()
    const [user, setUser] = useState({})
    const [bot, setBot] = useState("")
    const [msg, setMsg] = useState("")
    const [post, setPost] = useState([])

    const socket = io(ENDPOINT);

    useEffect(() => {
       const chitUser = JSON.parse(localStorage.getItem('chitchat'))
       if(!chitUser){
           history.push('/')
       }
       setUser(chitUser)
       console.log(chitUser);
       socket.on("salute", data => {
        console.log("try", data);
        setBot(data)
      })

      socket.emit('newUser', chitUser.username)
    }, [])

    useEffect(() => {

    }, []);

        const sendMsg = () => {
            socket.emit("msg", {user:user.username, msg})
            setMsg('')
        }

        useEffect(() => {
            socket.on("post", data => {
                setPost([...post, data])
                console.log(post);
            })
        },[socket])

        const renderPosts = () => {
            if(post.length > 0) {
               return post.map(({user, msg}, i) => {
                    return (
                        <div key={i} className="p-4 bg-purple-200">
                            <span className="text-gray-400 italic">{user}</span>
                            <span className="font-semibold">{msg}</span>
                        </div>
                    )
                })
            } else {
                <p className="text-gray-400">No messages</p>
            }
        }

    return (
        <div>
            <div className="chatBox">
                <div className="chat__tile">
                    <div className="bg-yellow-300"> </div>
                    <div><p>John Doe</p></div>
                </div>
                <div className="chat__area">
                    <div className="avatar bg-green-300">
                        <p className="chat__header">welcome {user.username}</p>
                    </div>
                    <div className="main bg-red-500">
                    <div className="salute"><p className="text-gray-500 text-center">{bot}</p></div>
                    <div>
                        {renderPosts()}
                    </div>
                    </div>
                    <div className="input bg-purple-800">
                        <input type="text" value={msg} onChange={e => setMsg(e.target.value)}/>
                        <GrSend className="send" onClick={sendMsg} color="blue"/>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Chat
