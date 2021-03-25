import React,{ useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-scroll';

//import Logo from '../../asserts/SmartIT.png';

function Header() {

    const [show,setShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 200){
                setShow(true);
            }else{
                setShow(false);
            }

        });

        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    return (
       <div className="header">
            <div className={`header__nav ${ show && "nav__black" }`}>
                {/**<img className="header__nav__img" src={Logo} alt="logo" />*/}
               
                <Link to="about" smooth={true}> <h2  className="header__nav__img" >SMARTIT</h2></Link>
                <div className="header__nav__menu">
                    <Link className="header__nav__menu__links" to="about" smooth={true}>About</Link>
                    <Link className="header__nav__menu__links" to="services" smooth={true}>Services</Link>
                    <Link className="header__nav__menu__links" to="products" smooth={true}>Products</Link>
                    <Link className="header__nav__menu__links" to="contacts" smooth={true}>Contacts</Link>
                    <Link className="header__nav__menu__links" to="upcommings" smooth={true}>Upcommings</Link>
                </div>
                <div className="header__nav__btns">
                    <div className="header__nav__btns__btn1"></div>
                    <div className="header__nav__btns__btn2"></div>
                </div>
            </div>
            <div className="header__sideBar">
                {/**<img className="header__sideBar__img" src={Logo} alt="logo" />*/}
                <h2  className="header__sideBar__img" >SMARTIT</h2>
                <div className="header__sideBar__menu">
                    <Link className="header__sideBar__menu__links" to="about" smooth={true}>About</Link>
                    <Link className="header__sideBar__menu__links" to="services" smooth={true}>Services</Link>
                    <Link className="header__sideBar__menu__links" to="products" smooth={true}>Products</Link>
                    <Link className="header__sideBar__menu__links" to="contacts" smooth={true}>Contacts</Link>
                    <Link className="header__sideBar__menu__links" to="upcommings" smooth={true}>Upcommings</Link>
                </div>
                <div className="header__sideBar__btns">
                    <div className="header__sideBar__btns__btn1"></div>
                    <div className="header__sideBar__btns__btn2"></div>
                </div>
            </div>
       </div>
    )
}

export default Header
