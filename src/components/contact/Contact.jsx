import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

// Needed to send emails from Portfolio
// Using emailjs "https://dashboard.emailjs.com/admin"
import { useRef } from "react";
import emailjs from "emailjs-com";
import Snackbar from "../snackbar/Snackbar.jsx";

// I wanted to give the opportunity to add error message in the future
// Right now Im just using the success message however
const SnackbarType = {
  success: "success",
  fail: "fail",
};

const Contact = () => {
  // I am using "useRef" so we can call the function "Show" inside the "Snackbar" component
  const snackbarRef = useRef(null);

  // Needed to send emails from Portfolio
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1btlr7h",
        "template_nkoadjs",
        form.current,
        "lxthyyRHadzoEMwu2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    // Show Success notification
    snackbarRef.current.Show();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        {/* LEFT SIDE - Contact options ================================== */}
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__email">richard.erdos.chalk@gmail.com</h5>
            <a href="mailto:richard.erdos.chalk@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Messenger</h5>
            <a href="https://m.me/richard.chalk.3" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsTelephone className="contact__option-icon" />
            <h4>Telephone</h4>
            <h5>Mobile</h5>
            <a>0046 + 70 469 98 59</a>
          </article>
        </div>

        {/* RIGHT SIDE - Contact form ==================================== */}
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div class="contact__input-div">
            <input
              type="text"
              className="contact__input"
              name="name"
              required
            />
            <span>Your full Name</span>
          </div>
          <div class="contact__input-div">
            <input
              type="email"
              className="contact__input"
              name="email"
              required
            />
            <span>Your email</span>
          </div>
          <div class="contact__input-div">
            <textarea
              rows="7"
              className="contact__input"
              name="message"
              required
            />
            <span>Your message</span>
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
      <Snackbar
        ref={snackbarRef}
        message="Email sent successfully"
        type={SnackbarType.success}
      />
    </section>
  );
};

export default Contact;
