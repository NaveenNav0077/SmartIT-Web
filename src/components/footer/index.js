import React from 'react'
import { Link } from 'react-scroll';
import "./footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__body">
                <Link className="footer__body__links" to="about" smooth={true}>SmartIT</Link>
                <Link className="footer__body__links" to="about" smooth={true}>About</Link>
                <Link className="footer__body__links"  to="services" smooth={true}>Services</Link>
                <Link className="footer__body__links" to="products" smooth={true}>Products</Link>
                <Link className="footer__body__links" to="contacts" smooth={true}>Contacts</Link>
                <Link className="footer__body__links" to="upcommings" smooth={true}>Upcommings</Link>
            </div>
            <div className="footer__copyright">
                SmartIT Make IT Automate
            </div>
        </div>
    )
}

export default Footer;