import React, { useState } from 'react';
import './style.css';

const AuthPage = () => {
    const [rightPanelActive, setRightPanelActive] = useState(false);

    const handleRegisterClick = () => {
        setRightPanelActive(true);
    };

    const handleLoginClick = () => {
        setRightPanelActive(false);
    };

    return (
        <div className="layouttong">
        <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container register-container">
                <form action="#">
                    <h1>Đăng ký tài khoản.</h1>
                    <div>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button>Đăng ký</button>
                    <span>hoặc</span>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-github"></i></a>
                    </div>
                </form>
            </div>

            <div className="form-container login-container">
                <form action="#">
                    <h1>Đăng Nhập</h1>
                    <div>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="content">
                        <div className="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                            <label>Nhớ mật khẩu</label>
                        </div>
                        <div className="pass-link">
                            <a href="/user/forgotpassword">Quên mật khẩu?</a>
                        </div>
                    </div>
                    <button>Đăng nhập</button>
                    <span>hoặc</span>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-github"></i></a>
                    </div>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="title">
                            FEEDBACKREWARD
                        </h1>
                        <p>Nếu bạn có tài khoản hãy đăng nhập để tận hưởng</p>
                        <button className="ghost" id="login" onClick={handleLoginClick}>
                            Đăng nhập
                            <i className="lni lni-arrow-left login"></i>
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="title">
                            FEEDBACKREWARD <br />
                        </h1>
                        <p>
                            Nếu bạn chưa có tài khoản hãy tạo để tận hưởng.
                        </p>
                        <button className="ghost" id="register" onClick={handleRegisterClick}>
                            Đăng ký
                            <i className="lni lni-arrow-right register"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AuthPage;
