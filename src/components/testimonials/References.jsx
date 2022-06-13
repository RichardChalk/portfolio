import React from "react";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION
// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION
// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION
// PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// //////////////////////////////////////////////////////

const referencesArray = [
  {
    id: 1,
    image: AVTR1,
    name: "Reference Name 1",
    position: "VD, Ipsos",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Reference Name 2",
    position: "CEO, Synovate",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Reference Name 3",
    position: "VD, Sweet systems",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Reference Name 4",
    position: "CEO, Demoskop",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },

]

const References = () => {
  return (
    <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     >
    {referencesArray.map(({ id, image, name, review, position }) => {
      return (
        <SwiperSlide  key={id} className="testimonial">
          <div className="client__avatar">
            <img src={image} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
          <small className="client__position">
            {position}
          </small>

        </SwiperSlide>
      );
    })}
  </Swiper>  );
};

export default References;
