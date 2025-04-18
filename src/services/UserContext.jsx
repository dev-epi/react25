import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";


export const UserContext = createContext()

export const UserProvider =({children})=>{

    const [user , setUser] = useState({})
  useEffect(()=>{
    loadData()
  },[])
  const loadData = ()=>{
    axiosInstance.get('/auth')
    .then((data)=>{
      console.log(data)
      setUser(data)
    }).catch(()=>{
      logout()
    })
  }

  const [token , setToken] = useState(localStorage.getItem('token2'))

  const addSkills = ( skill)=>{
    console.log(skill , 'from profile')
    let u = {...user , skills : [...user.skills , skill]}
    setUser(u)
  }
    const test = ()=>{
        console.log('test executed')
    }

    const logout = ()=>{
        localStorage.clear()
        setToken(null)
    }
    return <UserContext.Provider value={{test ,user ,addSkills , token , setToken , logout}}>
        {children}
    </UserContext.Provider>
}


