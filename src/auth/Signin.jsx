import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../services/axiosInstance";
import { UserContext } from "../services/UserContext";

export default function Signin() {
  const navigate = useNavigate()
  let {setToken} = useContext(UserContext)
  // const [email  , setEmail] = useState('')
  // const [password , setPassword] = useState('')
  const [user , setUser] = useState({
    'email' : '',
    'password' :''
  })

  const login=(event)=>{
    //eliminer l'action par defaut des formulaires
    event.preventDefault()
    axiosInstance.post('/login' ,user)
    .then(token=>{
      console.log(token)
      sessionStorage.setItem('token' , token)
      localStorage.setItem('token2' , token)
      setToken(token)
      navigate('/')
    }).catch(error=>{
      console.log(error)
      if(error.response.data){
        Swal.fire(error.response.data.message , '' , 'error')
      }
    })
    console.log(user)
  }
  const handleInput = (e)=>{
   
   setUser({...user , [e.target.name] : e.target.value})
  }
  return (
    <div>
          <form onSubmit={login}>
            <h2>Sign In</h2>
            <label htmlFor="">Email Address</label>
            <div className="input-group">
              
                <input type="text" placeholder="Email" name="email" onChange={handleInput} required/>
            </div>
            <p>{!user.email ? 'Champ obligatoir' : ''}</p>
            <label>Password</label>
            
            <div className="input-group">
                <input type="password" placeholder="Password" name="password"  onChange={handleInput} required/>
            </div>
            <p>&nbsp;</p>
            
            <button type="submit" className="btn btn-secondary" >Sign In</button>
        </form>
        <Link to="/auth/signup">Not a member? Sign Up</Link><br/>
        <Link to="/auth/forgot-password">Forgot Password ? </Link>
    </div>
  )
}
