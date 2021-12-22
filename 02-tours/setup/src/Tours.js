import React from "react";
import Tour from "./Tour";
const Tours = ({ tours,remmoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} remmoveTour={remmoveTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
