import React from 'react';
import homepic from '../../assets/images/Blood/2.png';
import './BloodSignup.css'
import { NavLink } from 'react-router-dom';

const BloodSignup = () => {
    const stat = window.sessionStorage.getItem("blood-accept")
    console.log(stat)
return (
    <>
        <div className="main-home">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <div className="main-btn">
                            <button className="login-btn">حساب موجود</button>
                            <button className="signup-btn signup-active">تسجيل جديد</button>
                        </div>
                        <img src={homepic} alt="" srcset="" className='signup-img'/>
                    </div>
                    <div className="right">
                        <div className="question-window">
                        <div className="test-title">
                            تسجيل متبرع جديد
                        </div>
                            <form action="" method="post">
                                <NavLink to='/questions'>
                                    <div className={stat ? "blood-check-accept":"blood-check-reject"}><span>لم يتم التحديد بعد : </span> اختبار صلاحية الدم</div>
                                </NavLink>
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
                                <input type="text" dir='rlt'/>
                                <br />
                                <label htmlFor="">العنوان</label>
                                <br />
                                <div className="area-sele">
                                <select name="area" id="" className='area'>
                                        <option value="0">المركز - المنطقة</option>
                                        <option value="العصافرة">العصافرة</option>
                                        <option value="سيدي بشر">سيدي بشر</option>
                                        <option value="سيدي جابر">سيدي جابر</option>
                                        <option value="ميامي">ميامي</option>
                                        <option value="سموحة">سموحة</option>
                                </select>
                                <select name="governmate" id="" className='governmate'>
                                        <option value="A+">المحافظة</option>
                                        <option value="A-">الأسكندرية</option>
                                </select>
                                </div>
                                <label htmlFor="">اتاحة الأتصال بك</label><br />
                                <div className="time-range">
                                <select name="end-time" id=""className='end-time'>
                                        <option value="0">النهاية</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                </select>
                                <select name="start-time" id=""className='start-time'>
                                        <option value="0">البداية</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                </select>
                                </div>
                                <br />
                                <br />
                                <div className="reg-btn">
                                    <button className='blood-signup'>تسجيل الحساب</button>
                                </div>
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
