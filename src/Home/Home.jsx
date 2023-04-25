import React from 'react';
import './Home.css';
import logo from '../assets/images/3.png';
import homeLogo from '../assets/images/2.png';
import homepic from '../assets/images/1.png';



const Home = () => {

  const txts = [
    "عزيزي المستخدم كن علي ثقة أن هدفنا مــن هــذا الموقــع هــو خدمــي بحــت",
    "عزيزي المستخدم كن علي ثقة أن هدفنا مــن هــذا الموقــع هــو خدمــي بحــت",
    "عزيزي المستخدم كن علي ثقة أن هدفنا مــن هــذا الموقــع هــو خدمــي بحــت"
  ]
  return (
    <div className='home'>
      <nav>
        <div className="container">
          <ul className='home-nav'>
            <li><a href='#login'>تسجيل الدخول</a></li>
            <li><a href='#login'>العناية المركزة</a></li>
            <li><a href='#login'>التبرع بالدم</a></li>
            <li><a href='#login'>الصفحة الرئيسية</a></li>
          </ul>
          <div className="logo">
            <img src ={logo} alt="logo"/>
          </div>
        </div>
      </nav>
      <div className="main-home">
        <div className="container">
          <div className="top">
            <div className="left">
              <img src={homeLogo} alt="" srcset="" />
              <h2>انقـذ_حيــاة#</h2>
              <div className="btns">
                <button className='blood'>التبرع بالدم</button>
                <button className='cure'>العناية المركزة</button>
              </div>
            </div>
            <div className="right">
              <img src={homepic} alt="" srcset="" />
            </div>
          </div>
          <div className="bottom">
            <p>{txts[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
