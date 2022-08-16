import React, { useRef, useState } from "react";
import "../contact/contact.css";
import emailjs from "@emailjs/browser";
import Darkmode from "../darkmode/darkmode";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yc0a814",
        "template_4d8tnwa",
        formRef.current,
        "uQpxjtz1DRORIkHM2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Reach out for coffee! 👉</h1>
          <div className="c-info"></div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story? </b>
            Get in touch. Always down for a cup of coffee and discussing new
            ideas
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              // style={{ backgroundColor: Darkmode && "#333", color: "#fff" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              // style={{ backgroundColor: Darkmode && "#333", color: "#fff" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea
              rows="5"
              placeholder="Message"
              name="user_message"
              required
            />
            <button type="submit">Send</button>
            {done && <p>Thank you, I will respond soon!...</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
