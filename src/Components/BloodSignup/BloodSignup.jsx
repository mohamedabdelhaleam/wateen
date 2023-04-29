import React, { useEffect, useState } from 'react';
import homepic from '../../assets/images/Blood/2.png';
import './BloodSignup.css'
import { NavLink } from 'react-router-dom';

const BloodSignup = () => {
    const [acceptStat ,setAcceptStat] = useState("")
    const [rejectStat ,setRejectStat] = useState("")
    const [blood,setBlood] =useState("")
    const [name,setName] =useState("")
    const [phone,setPhone] =useState("")
    const [governmate,setGovernmate] =useState("")
    const [city,setCity] =useState("")
    const [start,setStart] =useState("")
    const [end,setEnd] =useState("")
    useEffect(()=>{
        
        setAcceptStat(window.sessionStorage.getItem("blood-accept"))
        setRejectStat(window.sessionStorage.getItem("blood-reject"))
    },[])


    let changeClass = ()=>{
        let classchange = "blood-check"
        if(acceptStat === "true"){
            classchange = "blood-check-accept"
        }
        if (rejectStat === "true") {
            classchange = "blood-check-reject"
        }
        return classchange
    }


return (
    <>
        <div className="main-home">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <div className="main-btn">
                        <NavLink to="/blood-login"><button className="login-btn">حساب موجود</button></NavLink>
                        <NavLink to="/blood-signup"><button className="signup-btn signup-active">تسجيل جديد</button></NavLink>     
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
                                    <div className={changeClass()}> اختبار صلاحية الدم</div>
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
                                <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                                <br />
                                <label htmlFor="">رقم الهاتف</label>
                                <br />
                                <input type="text" dir='rlt' onChange={(e)=>{setPhone(e.target.value)}} />
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
                                    <input type="submit" value="تسجيل الحساب" className='blood-signup'/>
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
