import { createContext, useEffect, useState } from "react";
import {io} from 'socket.io-client'
export const SocketContext = createContext();
export const SocketProvider = ({children})=>{

    const socket = io('http://localhost:3000')
    const [connectedUsers, setUsers] = useState([])
   useEffect(()=>{
    socket.on('connect' , ()=>{
        console.log('connected')
        if(localStorage.getItem('token2'))
        socket.emit('setup' , localStorage.getItem('token2'))
    })

    socket.on('connectedUsers' , (users)=>{
        setUsers(users)
    })

    socket.on('disconnect' , ()=>{
        console.log('disconnected')
    })
    return ()=>{
        socket.disconnect()
    }
   
   } , [])
    return <SocketContext.Provider value={{connectedUsers}}>
            {children}
        </SocketContext.Provider>
}