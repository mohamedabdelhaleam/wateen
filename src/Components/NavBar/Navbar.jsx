import React from 'react';
import logo from '../../assets/images/3.png';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="container">
                <ul className='home-nav'>
                    <li><NavLink to ='/hospital-login'>تسجيل الدخول</NavLink></li>
                    <li><NavLink to ='/cure'>العناية المركزة</NavLink></li>
                    <li><NavLink to ='/blood-signup'>التبرع بالدم</NavLink></li>
                    <li><NavLink to ='/'>الصفحة الرئيسية</NavLink></li>
                </ul>
                <div className="logo">
                    <img src ={logo} alt="logo"/>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
