import React from "react";
import "./icard.css";
export const IngredientsCard = ({ ing }) => {
  return (
    <div className="wrapper">
      <h1>Ingredients</h1>
      <div style={{display: "flex",
              flexWrap: "wrap",}}>
        {ing.map((el, i) => (
          <div key={i} className="cols">
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <div className="container">
                <div className="front">
                  {" "}
                  <img  src={el.image} alt="" />
                  <div className="inner">
                    <p>{el.food}</p>
                    {/* <span>Lorem ipsum</span> */}
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    foodCategory:{el.foodCategory} <br />
                measure: {el.measure} <br />
                    quantity:{el.quantity} <br />
                {el.text} <br />
                    weight:{el.weight} <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
