import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/purpleflower.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="client" />
            <h5>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              explicabo ad rem id corporis cupiditate qui dolorem cum natus,
              illo commodi! Laboriosam magni illum porro aspernatur saepe!
              Beatae, totam quaerat.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
