import React, { useState } from "react";
import './login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.username) newErrors.username = 'Please enter username';
        if (!formData.password) newErrors.password = 'Please enter password';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form is valid");
            // Here you can handle form submission (e.g., send data to the server)
        }
    };

    return (
        <div className="form">
            <div className="container login">
                <div className="row">
                    <div className="col-md-3 login-left">
                        <img src="https://th.bing.com/th/id/OIG1.wEiQ5THKygtqn1KBn0W5?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Register " /><br />
                    </div>
                    <div className="col-md-9 login-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="login-heading">Login</h3>
                                <div className="row login-form">
                                    <div className="col-md-12 form-register">
                                        <div className="box-input d-flex flex-column mb-3">
                                            <input id="username" type="text"
                                                   placeholder="Username"
                                                   value={formData.username}
                                                   onChange={handleChange} />
                                            {errors.username && <span className="error">{errors.username}</span>}
                                        </div>
                                        <div className="box-input d-flex flex-column mb-3">
                                            <div className="d-flex" style={{ flex: 1 }}>
                                                <input className="input-password" style={{ flex: 1 }}
                                                       type={isPasswordVisible ? 'password' : 'text'} name="" id="password"
                                                       placeholder="Password"
                                                       value={formData.password}
                                                       onChange={handleChange} />
                                                <div className="icon-eye">
                                                    <i
                                                        className={`bi ${!isPasswordVisible ? 'bi-eye-slash' : 'bi-eye'}`}
                                                        id="togglePassword"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                </div>
                                            </div>
                                            {errors.password && <span className="error">{errors.password}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-register">
                                        <div className="box-button d-flex flex-column mb-3">
                                            <button className="normal-register-btn" onClick={handleSubmit}>Login</button>
                                            <div className="line-or d-flex justify-content-center my-3">
                                                <div className="line"></div>
                                                <span className="mx-2" style={{ color: 'rgb(112, 112, 112)' }}>or</span>
                                                <div className="line"></div>
                                            </div>
                                            <div className="box-button d-flex justify-content-between">
                                                <a className="another-login d-flex justify-content-center align-items-center me-2" href="">
                                                    <i className="bi bi-facebook me-2"></i>
                                                    <span>Login with Facebook</span>
                                                </a>
                                                <a className="another-login d-flex justify-content-center align-items-center" href="">
                                                    <i className="bi bi-google me-2"></i>
                                                    <span>Login with Google</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
