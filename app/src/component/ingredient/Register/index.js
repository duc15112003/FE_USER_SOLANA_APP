import React, { useState } from "react";
import './register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        phoneNumber: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const [errors, setErrors] = useState({});
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(true);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(true);

    const togglePassword1 = () => {
        setIsPasswordVisible1(!isPasswordVisible1);
    };

    const togglePassword2 = () => {
        setIsPasswordVisible2(!isPasswordVisible2);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validate = () => {
        let newErrors = {};
        if (!formData.lastName) newErrors.lastName = 'Please enter last name';
        if (!formData.firstName) newErrors.firstName = 'Please enter first name';
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Please enter phone number';
        } else if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Invalid phone number format';
        }
        if (!formData.username) newErrors.username = 'Please enter username';
        if (!formData.password) newErrors.password = 'Please enter password';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.email) {
            newErrors.email = 'Please enter email';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
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
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://th.bing.com/th/id/OIG1.wEiQ5THKygtqn1KBn0W5?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Login" /><br />
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Apply as a member</h3>
                                <div className="row register-form">
                                    <div className="col-md-6 form-register">
                                        <div className="box-input d-flex flex-column">
                                            <input id="lastName" type="text"
                                                   placeholder="Last name"
                                                   value={formData.lastName}
                                                   onChange={handleChange} />
                                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                                        </div>
                                        <div className="box-input d-flex flex-column">
                                            <input id="firstName" type="text"
                                                   placeholder="First name"
                                                   value={formData.firstName}
                                                   onChange={handleChange} />
                                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                                        </div>
                                        <div className="box-input d-flex flex-column">
                                            <input id="phoneNumber" type="text"
                                                   placeholder="Phone number"
                                                   value={formData.phoneNumber}
                                                   onChange={handleChange} />
                                            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-register">
                                        <div className="box-input d-flex flex-column">
                                            <input id="username" type="text"
                                                   placeholder="Username"
                                                   value={formData.username}
                                                   onChange={handleChange} />
                                            {errors.username && <span className="error">{errors.username}</span>}
                                        </div>
                                        <div className="box-input d-flex flex-column">
                                            <div className="d-flex" style={{ flex: 1 }}>
                                                <input className="input-password" style={{ flex: 1 }}
                                                       type={isPasswordVisible1 ? 'password' : 'text'} name="" id="password"
                                                       placeholder="Password"
                                                       value={formData.password}
                                                       onChange={handleChange} />
                                                <div className="icon-eye">
                                                    <i
                                                        className={`bi ${!isPasswordVisible1 ? 'bi-eye-slash' : 'bi-eye'}`}
                                                        id="togglePassword1"
                                                        onClick={togglePassword1}
                                                    />
                                                </div>
                                            </div>
                                            {errors.password && <span className="error">{errors.password}</span>}
                                        </div>
                                        <div className="box-input d-flex flex-column">
                                            <div className="d-flex" style={{ flex: 1 }}>
                                                <input className="input-confirm-password" style={{ flex: 1 }}
                                                       type={isPasswordVisible2 ? 'password' : 'text'} name=""
                                                       id="confirmPassword" placeholder="Confirm password"
                                                       value={formData.confirmPassword}
                                                       onChange={handleChange} />
                                                <div className="icon-eye">
                                                    <i
                                                        className={`bi ${!isPasswordVisible2 ? 'bi-eye-slash' : 'bi-eye'}`}
                                                        id="togglePassword2"
                                                        onClick={togglePassword2}
                                                    />
                                                </div>
                                            </div>
                                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-register">
                                        <div className="box-input d-flex flex-column">
                                            <input id="email" type="email"
                                                   placeholder="Email"
                                                   value={formData.email}
                                                   onChange={handleChange} />
                                            {errors.email && <span className="error">{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-register">
                                        <div className="box-button d-flex flex-column">
                                            <button className="normal-register-btn" onClick={handleSubmit}>ĐĂNG KÝ</button>
                                            <div className="line-or d-flex justify-content-center">
                                                <div className="line"></div>
                                                <span className="mx-2" style={{ color: 'rgb(112, 112, 112)' }}>hoặc</span>
                                                <div className="line"></div>
                                            </div>
                                            <div className="box-button d-flex">
                                                <a style={{ flex: 1 }} className="another-login d-flex justify-content-center align-items-center me-2" href=""><i
                                                    className="bi bi-facebook me-2"></i><span>Đăng ký bằng Facebook</span></a>
                                                <a style={{ flex: 1 }} className="another-login d-flex justify-content-center align-items-center" href=""><i
                                                    className="bi bi-google me-2"></i><span>Đăng ký bằng Google</span></a>
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

export default Register;
