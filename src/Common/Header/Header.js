import React from 'react';
import headerStyle from './Header.module.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';

import logo from '../../assets/images/logo.svg';

export const Header = (...props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            <li>Join Now! </li>
                            <li className={headerStyle.profileDropdown}>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><span className={headerStyle.icon}><PersonIcon /></span> Login</Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;
