import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  return <section id="contact">
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className="container contact__container">
      
      {/* LEFT SIDE - Contact options ================================== */}
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail/>
          <h4>Email</h4>
          <h5>richard.erdos.chalk@gmail.com</h5>
          <a href="mailto:richard.erdos.chalk@gmail.com">Send an email</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine/>
          <h4>Facebook</h4>
          <h5>Messenger</h5>
          <a href="https://m.me/richard.chalk.3" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <BsTelephone/>
          <h4>Telephone</h4>
          <h5>0046 + 70 469 98 59</h5>
        </article>
      </div>

      {/* RIGHT SIDE - Contact form ==================================== */}
      <form action="">

      </form>
    </div>
  </section>;
};

export default Contact;
