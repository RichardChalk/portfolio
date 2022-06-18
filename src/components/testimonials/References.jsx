import React from "react";
import AVTR1 from "../../assets/BjornSoderin.jpg";
import AVTR2 from "../../assets/PeterGotenstedt.PNG";
import AVTR3 from "../../assets/StefanHolmberg.jpg";
import AVTR4 from "../../assets/CamillaFriden.jpg";

// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION
// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION
// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION
// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// //////////////////////////////////////////////////////

const referencesArray = [
  {
    id: 3,
    image: AVTR3,
    name: "Stefan Holmberg",
    position: "CEO, Systementor AB",
    review:
      "I have never met someone as prestigeless and willing to learn as Richard. He has therefore become an excellent developer in just a few short years. Great personality and atttiude!",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Camilla Fridén",
    position: "IX: Inbound Experience, Freelance",
    review:
      "I experienced Richard as very driven and engaged in the individual and group tasks that were given. Richard took responsibility for his own learning and always delivered within the deadline. Richard was always in a happy mood and came to our lessons with curiosity and a willingness to learn.",
  },
  {
    id: 1,
    image: AVTR1,
    name: "Björn Söderin",
    position: "CEO, Kantar Millward Brown AB",
    review:
      "Richard is a trusted and very appreciated colleague who has contributed to a very pleasant atmosphere at the office and is always there when someone asks for help",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Peter Götenstedt",
    position: "Global Consultant Director, Universum AB",
    review:
      "Richard has been a greatly liked colleauge who has always taken care of his colleagues and his clients. I highly recommend Richard and congratulate in advance anyone that gets him as a new co-worker!",
  },
];

const References = () => {
  return (
    <Swiper
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {referencesArray.map(({ id, image, name, review, position }) => {
        return (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
            <small className="client__position">{position}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default References;
