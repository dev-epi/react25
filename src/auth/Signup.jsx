import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
    const {register , handleSubmit , formState : {errors}} = useForm({mode : 'onChange'})

    const signup = (data) =>{
        console.log(data)
    }
  return (
    <div><form onSubmit={handleSubmit(signup)} >
    <h2>Sign Up</h2>
    <label htmlFor="">Last Name</label>
    <div className="input-group">
        <input type="text" placeholder="Last Name" {...register('lastName' , {required : 'Last name required'})}/>
    </div>
    <p>{errors.lastName &&  errors.lastName.message}</p>
    <label htmlFor="">First Name</label>
    <div className="input-group">
        <input type="text" placeholder="First Name"  {...register('firstName' , {minLength : {value : 3 , message : 'At least 3 caracters'}})}/>
    </div>
    <p>{errors.firstName && errors.firstName.message}</p>
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
