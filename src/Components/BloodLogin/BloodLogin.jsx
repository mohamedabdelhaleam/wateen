import {React} from 'react';
import homepic from '../../assets/images/Blood/2.png';
import LogoLogin from '../../assets/images/2.png'
import './BloodLogin.css'
import { NavLink } from 'react-router-dom';

const BloodSignup = () => {

return (
    <>
        <div className="main-home">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <div className="main-btn">
                            <NavLink to="/blood-login"><button className="login-btn signup-active">حساب موجود</button></NavLink>
                            <NavLink to="/blood-signup"><button className="signup-btn">تسجيل جديد</button></NavLink>
                        </div>
                        <img src={homepic} alt="" srcset="" className='signup-img'/>
                    </div>
                    <div className="right">
                        <div className="question-window">
                        <div className="test-title">
                            تسجيل دخول لمتبرع
                        </div>
                        <div className="logo-cover">
                            <div className="logo-login"></div>
                        </div>
                            <form action="" method="post">

                                <br />
                                <label htmlFor=""> ادخل رقم هاتفك المحمول</label>
                                <br />
                                <input type="text" />

                                <br />
                                <br />
                                <div className="login-btn-continue">
                                    <button className='blood-login'>حسناً</button>
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
