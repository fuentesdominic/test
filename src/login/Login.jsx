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
        setIsPasswordVisible(!isPasswordVisible);
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
                    <div className="login-input-container" onSubmit={handleSubmit} >
                        <IoMdMail className="login-mail-icon" />
                        {/* <span className="login-input-span" htmlFor="email">Email</span> */}
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            className="login-input-form"
                            placeholder="Email"
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className="login-input-container">
                        {/* <span className="login-input-span" htmlFor="password">Password</span> */}
                        <input
                            onChange={handleChange}
                            name="password"
                            type={isPasswordVisible ? "text" : "password"}
                            className="login-input-form"
                            placeholder="Password"
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
                <Link to="" className="forget-password">Forget password?</Link>
            </div>
            <div className="login-rightside-div">
                <svg className="login-big-ellipse" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

                <svg className="login-small-ellipse" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

                <svg className="login-polygon" xmlns="http://www.w3.org/2000/svg" fill="none"></svg>

                <h1 className="right-login-title">New Here?</h1>

                <p className="login-slogan">Sign up to Invest in Your Financial Story... Your Next Chapter Awaits!</p>

                <Link to="/register">
                    <button className="sign-up-btn">Sign Up</button>
                </Link>
            </div>

        </div>
    )
}
export default Login