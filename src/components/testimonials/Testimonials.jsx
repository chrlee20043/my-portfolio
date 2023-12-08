import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/purpleflower.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    peerName: "Jennifer Hong",
    review:
      "I had the pleasure of collaborating with Christina Lee on a capstone project during our time in Fullstack Academy’s Grace Hopper Program — an intensive software engineering curriculum. Christina’s commitment to embracing new challenges was evident throughout our collaboration. She consistently displayed a proactive attitude, readily tackling new concepts and technologies to enhance our project's success.",
  },
  // {
  //   avatar: AVTR1,
  //   peerName: "Sofie Christensen",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero tenetur quaerat cum quos. Deserunt, corrupti saepe quos ipsam a accusantium odit ullam. Ad necessitatibus iure quaerat aut eveniet illo vel.",
  // },
  {
    avatar: AVTR1,
    peerName: "Christa Sereda",
    review:
      "Christina is an amazing developer, whose dedication during our capstone project, allowed our final masterpiece to be possible. She handled token passing with ease and was just super helpful during every aspect of its creation. She would be an invaluable addition to any team!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5>Review from peers</h5> */}
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, peerName, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client" />
              </div>
              <h5 className="client__name">{peerName}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
