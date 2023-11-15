import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
const title = " Register Now"
const socialTitle = "Login with Social Media"
const btnText = "Sign Up"

export const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const { signUpWithGmail, createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || "/";

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message
            setErrorMessage("Please provide valid email & password !")
        })
    }

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        //console.log(email, password, confirmPassword
        if (password !== confirmPassword) {
            setErrorMessage("password doesn't match ! please, provide a correct password")
        } else {
            setErrorMessage("");
            createUser(email, password).then((userCredential) => {
                const user = userCredential.user;
                alert("Account created sucessfully")
                navigate(from, { replace: true })
            }).catch((error) => {
                console.log(error.message);
                alert(`${error.message}`)
            })
        }
    }


    return (
        <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">{title}</h3>
                    <form className="account-form" onSubmit={handleSignup}>
                        <div className="form-group">
                            <input type="text" name="name" id="name" placeholder="Full Name " required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Email Address  " required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" placeholder="Password " required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password " required />
                        </div>

                        {/* showing message */}
                        <div>
                            {
                                errorMessage && (
                                    <div className="error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>
                        {/*<div className="form-group">
            <div className="d-flex justify-content-between flex-wrap pt-sm-2">
              <div className="checkgroup">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
                </div>
              <Link to="/forgetpass">Forget Password?</Link>
            </div>
        </div>*/}

                        <div className="form-group">
                            <button type="submit" className="d-block lab-btn">
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>

                    {/* account bottom */}
                    <div className="account-bottom">
                        <div className="d-block cate pt-10">
                            <span>
                                Have an Account ? <Link to="/login">Login</Link>
                            </span>
                            <span className="or">
                                <span>or</span>
                            </span>
                            {/* social media login */}
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button className="github" onClick={handleRegister}><i className="icofont-github"></i></button>
                                </li>
                                <li>
                                    <a href="/" className="facebook"><i className="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="/" className="twitter"><i className="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="/" className="linkedin"><i className="icofont-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="/" className="instagram"><i className="icofont-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Signup
