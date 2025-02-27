import { useNavigate, useParams } from "react-router-dom";
import { users } from "../data/users";
import { useEffect, useState } from "react";
import '../assets/user.css';
export default function User() {
  let { id } = useParams();
  let navigate = useNavigate();
 
  const [user , setUser] = useState({})
  useEffect(()=>{
   
    fetch('http://localhost:3000/user/'+id)
    .then(response=>response.json())
    .then(data=>{
      if(!data){
        navigate('/')
      }
      setUser(data)
    })
  
  },[])


  return  <div className="container">
  <aside id="aside">
    <div className="aside-section">
     
      <div className="avatar">
        <img src="assets/avatar.jpg" alt="me" />
      </div>
    </div>
    <div className="aside-section">
      <h3 className="section-heading">Profilo</h3>
      <hr />
      <div className="section-content">
        <h4>Name:</h4>
        <p></p>
        <h4>Email Address:</h4>
        <p>{user.email}</p>
        <h4>Phone:</h4>
        <p>+44 1223 34453</p>
        <h4>Address:</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <h4>Sex:</h4>
        <p>Male</p>
        <h4>Degree:</h4>
        <p>B.A</p>
      </div>
    </div>
   <div className="aside-section">
    <div className="section-content">
      
    </div>
   </div>
  

    <div className="aside-section">
      <h3 className="section-heading">Interests</h3>
      <hr />
      <div className="section-content">
        <ul className="fine-list">
          <li>Photography</li>
          <li>Programming</li>
          <li>Cooking</li>
        </ul>
      </div>
    </div>
  

    <div className="aside-section">
      <h3 className="section-heading">Languages</h3>
      <hr />
      <div className="section-content">
        <div className="flex-list">
          <div className="flex-item">
            <span>Arabic</span>
            <span>Native</span>
          </div>
          <div className="flex-item">
            <span>English</span>
            <span>Fluent</span>
          </div>
          <div className="flex-item">
            <span>French</span>
            <span>Good</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <main id="main">
    <section className="main-section">
      <h2>{user.firstName}</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique laboriosam, ex rerum voluptatibus id quis tempora laborum eligendi, autem error est distinctio nam!
      </p>
    </section>

    <section className="main-section">
      <h3>Enrollment</h3>
      <hr />
      <div className="mb-24">
        <div className="flex-item">
          <h4>Hight school</h4>
          <span>sep 2008 - mar 2012</span>
        </div>
        <p className="font-italic mt-0">
          Abu-shosha secondary school
        </p>
      </div>

      <div className="mb-24">
        <div className="flex-item">
          <h4>Computer Science</h4>
          <span>oct 2010 - apr 2015</span>
        </div>
        <p className="font-italic mt-0">
          El-shorouck Academy in Cairo
        </p>
      </div>

      <div className="mb-24">
        <div className="flex-item">
          <h4>Masters in engineering</h4>
          <span>dec 2019 - current</span>
        </div>
        <p className="font-italic mt-0">Harvard University</p>
      </div>
    </section>

    <section className="main-section">
      <h3>Professional Experience</h3>
      <hr />
      <div className="mb-24">
        <div className="flex-item">
          <h4>Joiner Software Engineer</h4>
          <span>2016 - 2017</span>
        </div>
        <p className="font-italic mt-0">Google, Egypt</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum eum temporibus iusto suscipit distinctio, sunt doloribus? Tempore quam cum laudantium nostrum enim.
        </p>
      </div>

      <div className="mb-24">
        <div className="flex-item">
          <h4>Product Manager</h4>
          <span>2017 - 2018</span>
        </div>
        <p className="font-italic mt-0">Spantags, Egypt</p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>

      <div className="mb-24">
        <div className="flex-item">
          <h4>Senior Developer</h4>
          <span>2019 - current</span>
        </div>
        <p className="font-italic mt-0">Spantags, Egypt</p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
    </section>

    <section className="main-section">
      <h3>Completed</h3>
      <hr />
      <div className="flex-item">
        <h4>Microsoft Office</h4>
        <div className="progress">
          <div className="progress-bar" style={{width: '75%'}}></div>
        </div>
      </div>

      <div className="flex-item">
        <h4>ICDL</h4>
        <div className="progress">
          <div className="progress-bar" style={{width: '75%'}}></div>
        </div>
      </div>

      <div className="flex-item">
        <h4>HTML & CSS</h4>
        <div className="progress">
          <div className="progress-bar" style={{width: '75%'}}></div>
        </div>
      </div>
    </section>
  </main>
</div>;
}
