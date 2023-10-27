import { useState } from "react";
import "../pages/Style.css";
// import { useNavigate } from "react-router";

const Register = () => {

  // let navigate = useNavigate()

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

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
          <span className={`input-label ${isFocused ? 'focused' : ''}`} htmlFor="email">Email</span>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="input-form"
            value={formValues.email}
            required
          />
        </div>

        <div className="input-container-2">
          <span htmlFor="name">Name</span>
          
        </div>
      </form>
      <button className="register-btn">Get Started</button>
      <div className="btm-div">
        <p className="btm-question">Already have an account?</p>
        <h3 className="btm-link" to="/sign-in">Login</h3>
      </div>
    </div>
  );
}

export default Register;
