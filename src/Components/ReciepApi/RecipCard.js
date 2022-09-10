import { Link } from "react-router-dom";
import "./card.css";
function RecipCard({ el }) {
  // console.log(el.recipe)
  return (
    <div className="card-container">
      <div className="card u-clearfix">
        <img src={el.recipe.image} alt="" className="card-media" />
        <div className="card-body">
          {/* <span className="card-number card-circle subtle">01</span> */}
          <span className="card-author subtle" />
          <h2 className="card-title">{el.recipe.label}</h2>
          <span className="card-description subtle">
            Meal Type: {el.recipe.mealType.map((el, i) => el)}
          </span>
          {/* <span className="card-tag card-circle subtle">C</span> */}
          <Link to={`/recieps/${el.recipe.uri.slice(51)}`}>
            <div className="card-read"> Details</div>
          </Link>
        </div>
      </div>
      <div className="card-shadow" />
    </div>
  );
}

export default RecipCard;
