import React, {useRef, useState} from 'react';
import './Contact.css';

import Footer from '../Footer/Footer.jsx';
import phone from "../../assets/images/contact/phone.webp";
import email from "../../assets/images/contact/email.webp";
import wheel from "../../assets/images/contact/wheel.webp";
// import close from "../../assets/images/projects/close.svg";

function Contact() {

   const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const FORMSPREE_URL = "https://formspree.io/f/xovpjabz"; // replace with your endpoint

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        formRef.current.reset(); // clear form
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert(`⚠️ Something went wrong. Please check your connection.${error}` );
    } finally {
      setLoading(false);
    }
  };

  const handleOutsideButton = () => {
    formRef.current.requestSubmit(); // triggers form submit event
  };

  return (
    <>
    <section className="contact">
      <div className="wheels">
        <img src={wheel} alt="" />
      </div>
      <div className="contact_container">
        <div className="contact_form_container">
          <h2>Contact</h2>
          <div className="form_details">
            <p>Don’t leave me hanging — <br/>tell me what you’re building!</p>
          <form ref={formRef} onSubmit={handleSubmit}  autoComplete='on'>
          <input type="text" id="name" name="name" placeholder="Name" required="yes"/>
          <input type="email" id="email" name="email" placeholder="email" required="yes"/>
          <input type="text" id="subject" name="subject" placeholder="subject" />
          <textarea name="message" id="message" rows="2" placeholder='your message' required></textarea>
          </form>
          </div> 
        </div>
        <div className="contact_right_block">
          {/* <button onClick={() => setContactActive(false)} id='close'><img src={close} alt="" /></button> */}
          <button onClick={handleOutsideButton} disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
        <div className="contact_ele_container">
          <h2>Or Else!</h2>
          <div className="contact_list">
            <div className="contact_email">
              <img src={email} alt="" />
              <div className="details">
                <h5>EMAIL : </h5>
                <p>studio@nandakishore.in</p>
              </div>
              </div>
              <div className="contact_phone">
                <img src={phone} alt="" />
                <div className="details">
                <h5>PHONE : </h5>
                <p>+91 89555 62492</p>
              </div>
              </div>
          </div>
          <div className="contact_list_mobile">
            <a href='tel:+918955562492' className="contact_email">
              <img src={email} alt="" />
              </a>
              <a href='tel:+918955562492' className="contact_phone">
                <img src={phone} alt="" />
              </a>
            
          </div>
        </div>
      </div>
       <div className="scroll_hint">
        <span>scroll</span>
        <div className="scroll_icon">
          <div className="disc_holder">
            <div className="left">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="right">
              <div className="circle move"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Contact
