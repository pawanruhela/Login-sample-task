import React from 'react';
import loginStyle from './Login.module.scss';
import Footer from '../../Organisms/Footer/Footer';
import Header from '../../Organisms/Header/Header';
import Thumbnail from '../../Molecules/Thumbnail/Thumbnail';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import facebookIcon from '../../../assets/images/facebook-icon.svg';
import twitterIcon from '../../../assets/images/twitter-icon.svg';
import googlePlusIcon from '../../../assets/images/google-plus-icon.svg';

export const Login = (...props) => {
    return (
        <React.Fragment>
            <Header />
            <div className={loginStyle.loginWrapper}>
                <div className={loginStyle.loginFormWrapper}>
                    <h1>Welcome back!</h1>
                    <form autoComplete="off">
                        <div className={loginStyle.formGroup}>
                            <label><PersonIcon /></label>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={loginStyle.formGroup}>
                            <label><LockIcon /></label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className={loginStyle.loginLink}>
                            <a href="/forget-password">Forget Your Password ?</a>
                        </div>
                        <button type="submit">Login</button>
                        <button disabled>Sign Up</button>
                    </form>
                    <div className={loginStyle.socialLogin}>
                        <h2><span>or</span></h2>
                        <ul>
                            <li><a href="#"><img src={facebookIcon} alt="" /></a></li>
                            <li><a href="#"><img src={twitterIcon} alt="" /></a></li>
                            <li><a href="#"><img src={googlePlusIcon} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <Thumbnail />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Login;
