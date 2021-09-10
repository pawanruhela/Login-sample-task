import React from 'react';
import headerStyle from './Header.module.scss';
import Profile from '../../Molecules/Profile/Profile';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/images/logo.svg';

export const Header = (...props) => {

    return (
        <React.Fragment>
            <header className={headerStyle.header}>
                <div className={headerStyle.headerInner}>
                    <div className={headerStyle.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={headerStyle.headerRight}>
                        <ul>
                            <li className={headerStyle.languageTag}>en</li>
                            <li className={headerStyle.joinNow}><Button>Join Now!</Button></li>
                            <li className={headerStyle.profileDropdown}>
                                <Profile />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;
