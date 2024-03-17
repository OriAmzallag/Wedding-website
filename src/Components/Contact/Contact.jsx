import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a233006e-3dca-468f-a799-823ea871860c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We value your feedback and inquiries. Whether you have questions about our services,
        need assistance with an order, or simply want to say hello, we're here to help!
        Feel free to reach out to us using the contact form below or directly via email or phone.
        We look forward to hearing from you soon!</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact-R&N@gmail.com</li>
            <li><img src={phone_icon} alt="" />(+972)-50-811-7006</li>
            <li><img src={location_icon} alt="" />307 W 93rd st, NY 10025</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Your name: </label>
            <input type="text" name='name' placeholder='Enter your name'
            required/>
            <label> Phone number: </label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' 
            required/>
            <label> Write your message here: </label>
            <textarea name="message" rows="4" placeholder='Enter your message' 
            required></textarea>
            <button type='submit' className= 'btn dark-btn'> submit now 
            <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
