import React, { FormEvent, useRef } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_77lr25l",
        "template_muz42ro",
        form.current as HTMLFormElement,
        "mS2nLB0bayJ68ID2N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current?.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>mahjsdev@gmail.com</h5>
            <a href="mailto:mahjsdev@gmail.com">Send a message...</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Messanger</h4>
            <h5>Whatsapp</h5>
            <a href="https://wa.me/+989358863982">Send a message...</a>
          </article>
          <article className="contact__option">
            <FaTelegram />
            <h4>Message</h4>
            <h5>Telegram</h5>
            <a href="https://telegram.me/mahdi_iranshahii">Send a message...</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
