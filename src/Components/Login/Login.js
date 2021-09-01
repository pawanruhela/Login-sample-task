import React from 'react';
import loginStyle from './Login.module.css';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import PersonIcon from '@material-ui/icons/Person';

import loginVector from '../../assets/images/login-vector.jpg';

export const Login = (...props) => {
    return (
        <React.Fragment>
            <Header />
            <div className={loginStyle.loginWrapper}>
                <div className={loginStyle.loginFormWrapper}>
                    <h1>Welcome back!</h1>
                    <form autoComplete="off">
                        <div classs={loginStyle.formGroup}>
                            <label><PersonIcon /></label>
                            <input type="email" placeholder="Username" />
                        </div>
                        <div classs={loginStyle.formGroup}>
                            <label><PersonIcon /></label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <a href="/forget-password">Forget Your Password ?</a>
                        <button>Login</button>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className={loginStyle.loginVectorWrapper}>
                    <img src={loginVector} alt="" />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Login;
