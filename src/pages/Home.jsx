import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import { users } from '../data/users'
import Card from '../ui/Card'

export default function Home() {

    let usersList = users
  return (
   
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

   
  )
}
