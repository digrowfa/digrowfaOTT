import React from 'react'
import './LoginRegister.css'
import './LoginRegisterDark.css'
import { Link } from 'react-router-dom'
import google from '../../../img/LoginRegister/google.png'
import Navigation from '../Includes/Navigation/Navigation'

const Login = () => {
    return (
        <>
            <Navigation />
            <section className='container-fluid p-0'>
                <div className='loginRegisterBg'>
                    <div className='loginRegisterBgOverlay'></div>
                    <div className='loginRegisterBgOverlayDark'></div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='loginRegisterContent'>
                                    <h1>Welcome to Digrowfa dummy title write here </h1>
                                    <form>
                                        <div className='loginRegisterForm'>
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className='loginRegisterForm forgetPassword'>
                                            <Link to="/">Forget Password?</Link>
                                        </div>
                                        <div className='loginRegisterForm'>
                                            <button>Login</button>
                                        </div>
                                        <div className='loginRegisterForm divider'></div>
                                        <Link to='/'>
                                            <div className='loginRegisterForm google'>
                                                <img src={google} alt="google" className='img-fluid' />
                                                Continue with Google
                                            </div>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login