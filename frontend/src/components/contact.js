import React from "react";
const Contact=()=>{
    return(
        <div className="container">
        <div className="contact">
            <div className="contact-left">
                <div className="contact-head">
                    <h1>Let's talk about everything!</h1>
                </div>
                <div className="contact-img">
                    <img className="con-img" alt="contact" src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"></img>
                </div>

            </div>
            <div className="contact-right">

                <input type="text" className="formstyle" placeholder="Your Name"/>
                <input type="text" className="formstyle" placeholder="Email"/>
                <input type="text" className="formstyle" placeholder="Subject"/>
                <textarea placeholder="Enter the Message" className="message"></textarea>
                <button className="formbtn">Submit</button>
            </div>

        </div>
        </div>
    );
}
export default Contact;