import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import { users } from '../data/users'
import Card from '../ui/Card'
import { useEffect, useState } from 'react'

export default function Home() {

    const [usersList , setUsers] = useState([])

    useEffect(()=>{
        fetchUsers()
    } , [])
    const fetchUsers = ()=>{
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data=>{
           
            setUsers(data)
            console.log(usersList)
        })
    }
    const search = (event)=>{
        console.log(event.keyCode)
        console.log(event.target.value)

        if(event.keyCode == 13){
            let text = (event.target.value).trim() 
            if(text != ''){
                fetch('http://localhost:3000/search-experiences/'+text)
                .then(response=>response.json())
                .then(data=>setUsers(data))
            }else{
               
              fetchUsers()
            }
            
        }
    }
  return (
   <>
   <input onKeyUp={search}></input>
   <div className="row">
          
          {
            usersList.map((user,index)=> <div className="col-md-3" key={index}>
            <Card >
                <div className="avatar">
                    <img src={logo} alt="" />
                    <img src="/vite.svg" alt="" />
                </div>
                <h2>{user.firstName} {user.lastName}</h2>
                <div className="rating">
                    <h4>6.4</h4>
                    <h4>8 feedbacks</h4>
                </div>
                <Link to={'/user/'+user._id }><button className="btn btn-primary"> CV</button> </Link>
                <button className="btn btn-secondary"><a href="feedbacks.html"> Feedbacks </a></button>
                
            </Card>
        </div>)
          }
       
    </div>
    </>

   
  )
}
