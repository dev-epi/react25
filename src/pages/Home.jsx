import logo from '../assets/react.svg'
import Card from '../ui/Card'

export default function Home() {
  return (
   
   <div className="row">
          
        <div className="col-md-3">
            <Card >
                <div className="avatar">
                    <img src={logo} alt="" />
                    <img src="/vite.svg" alt="" />
                </div>
                <h2>Foulen Ben Foulen</h2>
                <div className="rating">
                    <h4>6.4</h4>
                    <h4>8 feedbacks</h4>
                </div>
                <button className="btn btn-primary"> <a href="user.html"> CV </a></button>
                <button className="btn btn-secondary"><a href="feedbacks.html"> Feedbacks </a></button>
                
            </Card>
        </div>
    </div>

   
  )
}
