import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import Swal from "sweetalert2";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const signup = (data) => {
    axiosInstance
      .post("/registerr", data)
      .then(() => navigate("/auth/signin"))
      .catch((error) => {
        console.log(error)
        if (error.message) {
                Swal.fire(error.message, "", "error");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(signup)}>
        <h2>Sign Up</h2>
        <label htmlFor="">Last Name</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name required" })}
          />
        </div>
        <p>{errors.lastName && errors.lastName.message}</p>
        <label htmlFor="">First Name</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              minLength: { value: 3, message: "At least 3 caracters" },
            })}
          />
        </div>
        <p>{errors.firstName && errors.firstName.message}</p>
        <label htmlFor="">Email Address</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email required",
              minLength: {
                value: 6,
                message: "Email must at least 6 caracters",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Not a valid email format",
              },
            })}
          />
        </div>
        <p style={{ color: "red" }}>{errors.email && errors.email.message}</p>
        <label>Password</label>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <p>&nbsp;</p>
        <label>Confirm Password</label>

        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Confirm Password not valid",
            })}
          />
        </div>
        <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
        <button type="submit" className="btn btn-secondary">
          Sign Up
        </button>
      </form>
      <Link to="/auth/signin">Already have an account ? Sign in</Link>
      <br />
    </div>
  );
}
