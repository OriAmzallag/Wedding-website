import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=> {
    if (tx > -50) {
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackwards = ()=> {
    if (tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick=
      {slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick=
      {slideBackwards}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Shachaf Batito</h3>
                            <span>ISRAEL, West Bank</span>
                        </div>
                    </div>
                    <p>Whether you dream of a traditional ceremony or a unique theme,
                    Noga and Raday goes above and beyond to bring your ideas to life.
                    Trust them to create magical moments that you and your guests will cherish forever.</p>
                </div>
                </div>
            </li>
            <li>
                <div>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Ori Amzallag </h3>
                            <span>ISRAEL, TLV</span>
                        </div>
                    </div>
                    <p>For a wedding that reflects your unique style and love story,
                    I highly recommend Noga and Raday as your wedding organizer.
                    With their creative flair and meticulous planning,
                    they will transform your ideas into a breathtaking reality.</p>
                </div>
                </div>
            </li>
            <li>
                <div>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Natali Beri</h3>
                            <span>ISRAEL, TLV</span>
                        </div>
                    </div>
                    <p>When it comes to planning your perfect wedding,
                    look no further than Noga and Raday. With their expertise and passion for creating unforgettable moments,
                    Noga and Raday is your ideal choice for a seamless and magical wedding experience.</p>
                </div>
                </div>
            </li>
            <li>
                <div>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Daniel Naamad</h3>
                            <span>ISRAEL, West Bank</span>
                        </div>
                    </div>
                    <p>When searching for a wedding organizer who can turn your dreams into reality,
                    Noga and Raday is the perfect choice. Their commitment to creating unforgettable moments and their attention
                    to even the smallest details make them stand out in the industry.</p>
                </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
