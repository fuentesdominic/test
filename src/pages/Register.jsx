import { useState } from "react";
import { Link } from "react-router-dom"
import "../pages/Style.css";
import { IoMdMail } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
// import { useNavigate } from "react-router";

const Register = () => {

  // let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  // logic for password eyes
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordButtonVisible, setIsPasswordButtonVisible] = useState(true);

  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
  // logic for confrim password eyes
  const [isConfirmPasswordVisible, setisConfirmPasswordVisible] =useState(false);
  const [isConfirmPasswordButtonVisible, setIsConfirmPasswordButtonVisible] =useState(true);

  const toggleConfirmPasswordVisibility = () => {
    setisConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle middleware

    // Navigate('/')
  }

  return (
    <div className="full-register-page">
      <div className="register-title-div">
        <svg className="register-big-ellipse" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

        <svg className="register-small-ellipse" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

        <svg className="register-polygon" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

        <h1 className="register-title">Empower Your Financial Future</h1>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>

        <div className="input-container">
          <IoMdMail className="mail-icon" />
          <span className="input-label" htmlFor="email">Email</span>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="input-form"
            value={formValues.email}
            required
          />
        </div>

        <div className="input-container">
          <FaUserAlt className="user-icon" />
          <span className="input-label" htmlFor="username">Username</span>
          <input
            onChange={handleChange}
            name="username"
            type="username"
            className="input-form"
            value={formValues.name}
            required
          />
        </div>

        <div className="input-container">
          <span className="input-label" htmlFor="password">Password</span>
          <input
            onChange={handleChange}
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            className="input-form"
            value={formValues.password}
            required
          />
          {isPasswordButtonVisible && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="show-hide-btn"
            >
              {isPasswordVisible ?
                <FaEye />
                :
                <FaEyeSlash />}
            </button>
          )}
        </div>

        
        {formValues.password && (
        <div className="input-container">
          <span className="input-label" htmlFor="confirmPassword"> Confirm Password</span>
          <input
            onChange={handleChange}
            name="confirmPassword"
            type={isConfirmPasswordVisible ? "text" : "password"}
            className="input-form"
            value={formValues.confirmPassword}
            required
          />
          {isConfirmPasswordButtonVisible && (
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="show-hide-btn"
            >
              {isConfirmPasswordVisible ?
                <FaEye />
                :
                <FaEyeSlash />}
            </button>
          )}
        </div>
          )}
      </form>

        <button disabled={!formValues.email ||
          (!formValues.password &&
            formValues.confirmPassword === formValues.password
          )}
           className="register-btn">Get Started</button>
      <div className="btm-div">
        <p className="btm-question">Already have an account?</p>
        <Link className="btm-link" to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Register;
