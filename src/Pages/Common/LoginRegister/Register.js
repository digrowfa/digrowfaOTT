import React, { useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import google from "../../../img/LoginRegister/google.png";
import Axios from "axios";
import { BASEURL } from "../../../Constents/Constents";
import UserState from "../../../Context";

const Register = () => {
    const [input, setInput] = useState({});
    const [user, setUser] = useState()


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput((values) => ({
            ...values, [name]:value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post(`${BASEURL}api/user/signup`, { name: input.name, number: input.number, email: input.email, password: input.password })
        .then(data => {
            // setUser(data.data.data)
            console.log('userData', data.data.data)
        })
    }

    return (
        <>
            <section className="container-fluid p-0">
                <div className="loginRegisterBg">
                    <div className="loginRegisterBgOverlay"></div>
                    <div className="loginRegisterBgOverlayDark"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="loginRegisterContent">
                                    <h1>Welcome to Digrowfa dummy title write here </h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="loginRegisterForm">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="name"
                                                    name="name"
                                                    value={input.name || ""}
                                                    onChange={handleChange}
                                                />
                                                <label for="name">Name</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="number"
                                                    placeholder="9555271705"
                                                    name="number"
                                                    value={input.number || ""}
                                                    onChange={handleChange}
                                                />
                                                <label for="number">Phone Number</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    name="email"
                                                    value={input.email || ""}
                                                    onChange={handleChange}
                                                />
                                                <label for="email">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    value={input.password || ""}
                                                    onChange={handleChange}
                                                />
                                                <label for="password">Create Password</label>
                                            </div>
                                        </div>
                                        <div className="loginRegisterForm">
                                            <button>Submit</button>
                                        </div>
                                        <div className="loginRegisterForm divider"></div>
                                        <Link to="/">
                                            <div className="loginRegisterForm google">
                                                <img src={google} alt="google" className="img-fluid" />
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
    );
};

export default Register;
