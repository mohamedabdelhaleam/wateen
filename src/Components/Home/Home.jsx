import React from 'react';
import './Home.css';
import homeLogo from '../../assets/images/2.png';
import homepic from '../../assets/images/1.png';



const Home = () => {

  const txts = [
    "عزيزي المستخدم كن علي ثقة أن هدفنا مــن هــذا الموقــع هــو خدمــي بحــت",
    "نتمني أن نتعاون سوياً علي تحقيق هدف التطبيق بإسعاف أكبر قدر من المحتاجين",
    "نحن نرحب في أي وقت بأي شكاوي أو استفسارات أو افتراحات لتطوير التطبيق"
  ]
  return (
    <div className='home'>
      <div className="main-home">
        <div className="container">
          <div className="top">
            <div className="left">
              <img src={homeLogo} alt="" srcset="" className='home-main-img'/>
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
            <p>{txts[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
