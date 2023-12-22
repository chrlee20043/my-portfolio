import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cq0w13a",
        "template_68knuym",
        form.current,
        "1RjqFWglZ1rRdoCso"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          console.error(error);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section id="contact">
        {/* <h5>Get In Touch</h5> */}
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>chrlee93@gmail.com</h5>
              <a
                href="mailto:chrlee93@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/christinaehlee/"
                target="_blank"
                rel="noreferrer"
              >
                Connect
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

      <div className="container modal_container">
        <div className="content">
          <div className="success">
            <div className="success-modal modal">
              <div className="modal-icon success-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="modal-top">
                <h1>Message Sent!</h1>
              </div>
              <div className="modal-bottom modal-bottom-success">
                <button type="button" class="modal-btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <p>{error}</p>}
      <div className="container modal_container">
        <div className="content">
          <div className="fail">
            <div className="fail-modal modal">
              <div className="modal-icon fail-icon">
                <FontAwesomeIcon icon={faX} />
              </div>
              <div className="modal-top">
                <h1>Failed to Send</h1>
              </div>
              <div className="modal-bottom modal-bottom-fail">
                <button type="button" class="modal-btn">
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
