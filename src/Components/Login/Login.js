import React from 'react';
import loginStyle from './Login.module.css';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import EventIcon from '@material-ui/icons/Event';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import VideocamIcon from '@material-ui/icons/Videocam';
import loginVector from '../../assets/images/login-vector.jpg';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import twitterIcon from '../../assets/images/twitter-icon.svg';
import googlePlusIcon from '../../assets/images/google-plus-icon.svg';
import thumbnail1 from '../../assets/thumbnail/puzzle-img1.jpg';
import thumbnail2 from '../../assets/thumbnail/puzzle-img2.jpg';
import thumbnail3 from '../../assets/thumbnail/puzzle-img3.jpg';
import thumbnail4 from '../../assets/thumbnail/puzzle-img4.jpg';
import thumbnail5 from '../../assets/thumbnail/puzzle-img5.jpg';
import thumbnail6 from '../../assets/thumbnail/puzzle-img6.jpg';
import thumbnail7 from '../../assets/thumbnail/puzzle-img7.jpg';
import thumbnail8 from '../../assets/thumbnail/puzzle-img8.jpg';

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
                <div className={loginStyle.loginVectorWrapper}>
                    <div className={loginStyle.thumbnailWrapper}>
                        <div>
                            <a href="#">
                                <span className={loginStyle.green}><RssFeedIcon/> Live</span>
                                <img src={thumbnail1} alt="Thumbnail" title="Thumbnail" />
                            </a>
                            <a href="#">
                                <span className={loginStyle.orange}><EventIcon /> Event</span>
                                <img src={thumbnail2} alt="Thumbnail" title="Thumbnail" />
                            </a>
                            <a href="#">
                                <span className={loginStyle.blue}><VideocamIcon/> Recorded Show</span>
                                <img src={thumbnail3} alt="Thumbnail" title="Thumbnail" />
                            </a>
                        </div>
                        <div className={loginStyle.secondRow}>
                            <a href="#">
                                <span className={loginStyle.pink}><LaptopMacIcon/> Classes</span>
                                <img src={thumbnail4} alt="Thumbnail" title="Thumbnail" />
                            </a>
                            <a href="#">
                                <span className={loginStyle.orange}><EventIcon /> Event</span>
                                <img src={thumbnail5} alt="Thumbnail" title="Thumbnail" />
                            </a>
                            <a href="#">
                                <span className={loginStyle.blue}><VideocamIcon/> Recorded Show</span>
                                <img src={thumbnail6} alt="Thumbnail" title="Thumbnail" />
                            </a>
                        </div>
                        <div className={loginStyle.others}>
                            <a href="#">
                                <span className={loginStyle.pink}><LaptopMacIcon/> Classes</span>
                                <img src={thumbnail7} alt="Thumbnail" title="Thumbnail" />
                            </a>
                            <img src={thumbnail8} alt="Thumbnail" title="Thumbnail" />
                        </div>
                    </div>
                    <img src={loginVector} alt="" />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Login;
