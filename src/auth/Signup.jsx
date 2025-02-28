import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div><form>
    <h2>Sign Up</h2>
    <label htmlFor="">Last Name</label>
    <div className="input-group">
        <input type="text" placeholder="Last Name"/>
    </div>
    <p>&nbsp;</p>
    <label htmlFor="">First Name</label>
    <div className="input-group">
        <input type="text" placeholder="First Name"/>
    </div>
    <p>&nbsp;</p>
    <label htmlFor="">Email Address</label>
    <div className="input-group">
      
        <input type="text" placeholder="Email"/>
    </div>
    <p>&nbsp;</p>
    <label>Password</label>
    
    <div className="input-group">
        <input type="password" placeholder="Password"/>
    </div>
    <p>&nbsp;</p>
    <label>Confirm Password</label>
    
    <div className="input-group">
        <input type="password" placeholder="Confirm Password"/>
    </div>
    <p>&nbsp;</p>
    <button type="submit" className="btn btn-secondary">Sign Up</button>
</form>
<Link to="/auth/signin">Already have an account ? Sign in</Link><br/>
        
    </div>
  )
}
