import { createContext, useEffect, useState } from "react";
import {io} from 'socket.io-client'
import Swal from "sweetalert2";
export const SocketContext = createContext();
export const SocketProvider = ({children})=>{

   // const socket = io('http://localhost:3000')
    const [connectedUsers, setUsers] = useState([])
//    useEffect(()=>{
//     socket.on('connect' , ()=>{
//         console.log('connected')
//         if(localStorage.getItem('token2'))
//         socket.emit('setup' , localStorage.getItem('token2'))
//     })

//     socket.on('connectedUsers' , (users)=>{
//         setUsers(users)
//     })

//     socket.on('disconnect' , ()=>{
//         console.log('disconnected')
//     })

//     socket.on('ping' , ()=>{
//         Swal.fire({
//             title : 'hello',
//             toast : true,
//             position : 'bottom-end',
//             showConfirmButton : false
//         })
//     })
//     return ()=>{
//         socket.disconnect()
//     }
   
//    } , [])

   const ping = (userId)=>{
    //socket.emit('send' , userId)
   }

    return <SocketContext.Provider value={{connectedUsers , ping}}>
            {children}
        </SocketContext.Provider>
}