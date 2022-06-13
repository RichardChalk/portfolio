import React from "react";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

const referencesArray = [
  {
    id: 1,
    image: AVTR1,
    name: "Reference Name 1",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Reference Name 2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Reference Name 3",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Reference Name 4",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui aspernatur enim explicabo doloribus eligendi minima temporibus, eveniet nemo. Reprehenderit dolorum hic doloremque deserunt nobis esse ipsam culpa dolorem quis.",
  },

]

const References = () => {
  return (
    <div className="container testimonials__container">
    {referencesArray.map(({ id, image, name, review }) => {
      return (
        <article className="testimonial">
          <div className="client__avatar">
            <img src={image} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </article>
      );
    })}
  </div>  );
};

export default References;
