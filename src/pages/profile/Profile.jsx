
import { useContext } from "react"
import Skills from "./Skills"
import { UserContext } from "../../services/UserContext"

export default function Profile() {

  let {user} = useContext(UserContext)
  return (
    <div className="container">
  
    <div className="card">
      <h2>Personal Information</h2>
      <form>
        <div className="avatar">
          <img alt="Avatar" />
          <input type="file" accept="image/*" />
        </div>
        
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Full Name" value={user.lastName} />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="email" placeholder="Email" value={user.email} />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="tel" placeholder="Phone Number" value="+216 99 999 999" />
        </div>
        <button className="btn btn-secondary" type="submit">Save Info</button>
      </form>
    </div>


    <div className="card">
      <h2>Work Experience</h2>
      <form>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Job Title" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Company Name" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Start Year" />
          <input type="text" placeholder="End Year" />
        </div>
        <div className="input-group" style={{marginBottom: '10px'}}>
          <input type="text" placeholder="Short Description" />
        </div>
        <button className="btn btn-primary" type="submit">Add Experience</button>
      </form>

     
      <ul style={{marginTop: '20px'}}>
        <li>
          <strong>Software Engineer</strong> at ABC Corp (2022 - 2023)
          <button className="edit">✏️</button>
          <button className="close">🗑️</button>
        </li>
      </ul>
    </div>

  
    <div className="card">
      <h2>Skills</h2>
     
     <Skills items={user.skills}  />

      
    </div>
  </div>
  )
}
