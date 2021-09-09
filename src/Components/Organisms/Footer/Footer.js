import React from 'react';
import footerStyle from './Footer.module.scss';

export const Footer = (...props) => {
    return (
        <React.Fragment>
            <footer className={footerStyle.footer}>
                <ul>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
