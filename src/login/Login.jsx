import "../login/Login.css";
// import { useNavigate } from "react-router"
import { useState } from "react"
import { Link } from "react-router-dom";
import { IoMdMail } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    // let navigate =useNavigate()

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    // logic for password eyes
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordButtonVisible, setIsPasswordButtonVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!setIsPasswordVisible)
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefualt();
        // Handle middleware

        // navigate('/')
    }

    return (
        <div className="full-login-page">
            <div className="login-form-div">
                <h1 className="login-form-title">Welcome Back</h1>
                <form className="login-form">
                    <div className="l-input-container" onSubmit={handleSubmit} >
                        <IoMdMail className="login-mail-icon" />
                        <span className="login-input-span" htmlFor="">Email</span>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            className="login-input-form"
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className="login-input-container">
                        <span className="login-input-span" htmlFor="password">Password</span>
                        <input
                            onChange={handleChange}
                            name="password"
                            type={isPasswordVisible ? "text" : "password"}
                            className="login-input-form"
                            value={formValues.password}
                            required
                        />
                        {isPasswordButtonVisible && (
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="login-show-hide-btn"
                            >
                                {isPasswordVisible ?
                                    <FaEye />
                                    :
                                    <FaEyeSlash />}
                            </button>
                        )}
                    </div>
                    <button className="login-btn" disabled={!formValues.email || !formValues.password}>Login</button>
                </form>
                {/* making p tag a link */}
                <p className="forget-password">Forget password?</p>
            </div>
            <div className="login-leftside-div">
                <svg className="login-big-ellipse" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

                <svg className="login-small-ellipse" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

                <svg className="login-polygon" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

                <h1 className="login-title">New Here?</h1>
                <p className="login-slogan">Sign up and level up your financial game!</p>

                <Link to="/register">
                    <button className="sign-up-btn">Sign Up</button>
                </Link>
            </div>

        </div>
    )
}
export default Login