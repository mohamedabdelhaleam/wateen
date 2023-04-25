import React from 'react';
import './BloodScreen.css';
import logo from '../../assets/images/3.png'
import MainPic from '../../assets/images/screen2/1.png'
import InfoPic from '../../assets/images/screen2/6.png'
import ListPic from '../../assets/images/screen2/4.png'
import NeedPic from '../../assets/images/screen2/5.png'
import SearchPic from '../../assets/images/screen2/3.png'
import RegPic from '../../assets/images/screen2/2.png'



const BloodScreen = () => {
  return (
    <div>
         <nav>
        <div className="container">
          <ul className='home-nav'>
            <li><a href='#login'>تسجيل الدخول</a></li>
            <li><a href='#login'>العناية المركزة</a></li>
            <li><a href='#login' className='active'>التبرع بالدم</a></li>
            <li><a href='#login'>الصفحة الرئيسية</a></li>
          </ul>
          <div className="logo">
            <img src ={logo} alt="logo"/>
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="container">
            <div className="top">
                <h2 dir='rtl'>
                يساعد التبرع بالدم علي الحد مـن الاصابة <br /> بالسرطان وأمراض القلب والشرايين كما <br /> يساعـــد علي تنشيــط الــدورة الدمويـــة 
                </h2>
                <img src={MainPic} alt="" srcset="" />
            </div>
            <div className="bottom">
                <div className="info">
                    <a href="#info">
                        <div>
                            <img src={InfoPic} alt="" srcset="" />
                        </div>
                        <p>معلومات عن الدم</p>
                    </a>
                </div>
                <div className="list">
                    <a href="#list">
                        <div>
                            <img src={ListPic} alt="" srcset="" />
                        </div>
                        <p>قائمة حالات احتياج للدم</p>
                    </a>
                </div>
                <div className="need">
                    <a href="#need">
                        <div>
                            <img src={NeedPic} alt="" srcset="" />
                        </div>
                        <p>تسجيل حالة احتياج للدم</p>
                    </a>
                </div>
                <div className="search">
                    <a href="#search">
                        <div>
                            <img src={SearchPic} alt="" srcset="" />
                        </div>
                        <p>ابحث بالفصيلة والموقع</p>
                    </a>
                </div>
                <div className="reg">
                    <a href='#reg'>
                        <div>
                            <img src={RegPic} alt="" srcset="" />
                        </div>
                        <p>تسجيل متبرع</p>
                    </a>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default BloodScreen;
