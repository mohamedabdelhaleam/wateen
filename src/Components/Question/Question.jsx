import React, { useState } from 'react';
import './Question.css';
import questionspic from '../../assets/images/Blood/2.png';
import { NavLink } from 'react-router-dom';


const Question = () => {

    let [count , setCount] = useState(0);
    const [accept,setAccept] = useState(false);
    const [reject,setRejected] = useState(false);
    const txts = [
        "هل سنك أقل من 18 سنة",
        "هل وزنك أقل من 50 كجم ؟",
        "هل تبرعت بالدم خلال ال 3 أشهر الماضية ؟",
        "هل أجريت أي عملية جراحية خلال ال 3 أشهر الماضية ؟",
        "هل تعاني من أي أمراض نزف الدم ؟ هل تأحذ جرعات بشكل دائم من دواء معين مضاد لتجلط الدم ؟",
        "هل أنت مصاب بفقر الدم أو أي نوع من أنواع الأنيميا عدا أنيميا نقص الحديد ؟",
        "هل تعاني من أي أمراض صدرية مزمنة أو أمراض القلب أو الحمي الروماتيزمية ؟",
        "هل أنت مصاب بأي من هذة الأمراض (الإيدز - التهاب الكبد - الملاريا - الفشل الكلوي - البول الشكري - ارتفاع ضغط الدم السرطان) ؟",
        "هل تواجه أي من هذة الحالات (تضخم الكبد - التشنجات - الصرع والإغماء - خلل في الغدة الدرقية )",
        "هل أنت مصاب بفقر الدم أو أي نوع من أنواع الأنيميا عدا أنيميا نقص الحديد ؟",
        "هل تعاني من أي أمراض صدرية مزمنة أو أمراض القلب أو الحمي الروماتيزمية ؟",
        "لقد اجتزت الإختبار وأصبحت بشكل مبدئي جاهز للتبرع لكن هناك أسئلة وفحوصات أخري سيقوم بها الطبيب عند التبرع" ,
        "إجابتك الأخبرة تعني أن لديك مانع للتبرع بالدم"
    ];
    window.sessionStorage.setItem('blood-accept',accept)
    window.sessionStorage.setItem('blood-reject',reject)
    return (
        <div>
            <div className="main-questions">
        <div className="container">
          <div className="top">
            <div className="left">
                    <div className="main-btn">
                        <button className="login-btn ">حساب موجود</button>
                        <button className="signup-btn signup-active">تسجيل جديد</button>
                    </div>
              <img src={questionspic} alt="" srcset="" />
            </div>
            <div className="right">
              <div className="question-window">
                <div className="test-title">
                    اختبار صلاحية التبرع بالدم
                </div>
                <div className="question-content">
                    <div className="txt-content">
                        {txts[count]}
                    </div>
                    <div className="chose-btns">
                        <button  className='btn no-btn' disabled={accept ? "disabled": reject ? "disabled":""} onClick={(e)=>{
                            if(count >= 0 && count < txts.length){
                                setCount(count+1)
                            }
                            if (count < 0) {
                                setCount(count = 0)
                            }
                            if (count === txts.length-3) {
                                setAccept(accept => !accept)
                                setCount(count = 11)
                            }
                        }}> لا </button>
                        <button  className='btn yes-btn' disabled={accept ? "disabled": reject ? "disabled":""} onClick={(e)=>{
                            setCount(count = 12)
                            setRejected( reject => !reject)
                        }}> نعم </button>
                    </div>
                </div>
                <div className="last-btns">
                    <NavLink to="/home">
                        <button className={accept ? "continue-btn-close ":"continue-btn-active "}>الخروج</button>
                    </NavLink>
                    <NavLink to="/blood-signup">
                        <button className={accept ? "continue-btn-active ":"continue-btn-close "}>أكمال التسجيل</button>    
                    </NavLink>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Question;


/*

    {txts[count]}
        <button  className='btn' disabled={accept ? "disabled": reject ? "disabled":""} onClick={(e)=>{
            if(count >= 0 && count < txts.length){
                setCount(count+1)
            }
            if (count < 0) {
                setCount(count = 0)
            }
            if (count === txts.length-3) {
                setAccept(accept => !accept)
                setCount(count = 11)
            }
        }}> لا </button>
        <button  className='btn' disabled={accept ? "disabled": reject ? "disabled":""} onClick={(e)=>{
            setCount(count = 12)
            setRejected( reject => !reject)
        }}> نعم </button>
        <button className='btn' >الخروج</button>
        <button className={accept ? "continue-btn-active btn":"continue-btn-close btn"}>أكمال التسجيل</button>

*/