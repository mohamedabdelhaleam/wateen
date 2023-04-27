import React from 'react';
import logo from '../../assets/images/3.png';
import homepic from '../../assets/images/Blood/2.png';
import './BloodSignup.css'

const BloodSignup = () => {
return (
    <>
        <nav>
            <div className="container">
                <ul className='home-nav'>
                    <li><a href='#login'>تسجيل الدخول</a></li>
                    <li><a href='#login'>العناية المركزة</a></li>
                    <li><a href='#login' className='active'>التبرع بالدم</a></li>
                    <li><a href='#lo../gin'>الصفحة الرئيسية</a></li>
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
                        <div className="main-btn">
                            <button className="login-btn ">حساب موجود</button>
                            <button className="signup-btn signup-active">تسجيل جديد</button>
                        </div>
                        <img src={homepic} alt="" srcset="" />
                    </div>
                    <div className="right">
                        <div className="question-window">
                            <form action="" method="post">
                                <div className="blood-check"></div>
                                <label htmlFor="">حدد نوع فصيلة الدم</label>
                                <br />
                                <select name="blood-type" id="">
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                </select>
                                <br />
                                <label htmlFor="">اسم المتبرع</label>
                                <br />
                                <input type="text" />
                                <br />
                                <label htmlFor="">رقم الهاتف</label>
                                <br />
                                <input type="text" />
                                <br />
                                <label htmlFor="">العنوان</label>
                                <br />
                                <select name="blood-type" id="">
                                        <option value="A+">المحافظة</option>
                                        <option value="A-">الأسكندرية</option>
                                </select>
                                <select name="blood-type" id="">
                                        <option value="A+">المركز - المنطقة</option>
                                        <option value="A-">العصافرة</option>
                                        <option value="B+">سيدي بشر</option>
                                        <option value="B-">سيدي جابر</option>
                                        <option value="O+">ميامي</option>
                                        <option value="O-">سموحة</option>
                                </select>
                                <br />
                                <label htmlFor="">اتاحة الأتصال بك</label><br />
                                <select name="blood-type" id="">
                                        <option value="">النهاية</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                        <option value="">9</option>
                                        <option value="">10</option>
                                        <option value="">11</option>
                                        <option value="">12</option>
                                        <option value="">13</option>
                                        <option value="">14</option>
                                        <option value="">15</option>
                                        <option value="">16</option>
                                        <option value="">17</option>
                                        <option value="">18</option>
                                        <option value="">19</option>
                                        <option value="">20</option>
                                        <option value="">21</option>
                                        <option value="">22</option>
                                        <option value="">23</option>
                                        <option value="">24</option>
                                </select>
                                <select name="blood-type" id="">
                                        <option value="">البداية</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                        <option value="">9</option>
                                        <option value="">10</option>
                                        <option value="">11</option>
                                        <option value="">12</option>
                                        <option value="">13</option>
                                        <option value="">14</option>
                                        <option value="">15</option>
                                        <option value="">16</option>
                                        <option value="">17</option>
                                        <option value="">18</option>
                                        <option value="">19</option>
                                        <option value="">20</option>
                                        <option value="">21</option>
                                        <option value="">22</option>
                                        <option value="">23</option>
                                        <option value="">24</option>
                                </select>
                                <br />
                                <br />
                                <button>تسجيل الحساب</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default BloodSignup;
