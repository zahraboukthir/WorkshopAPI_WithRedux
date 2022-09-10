import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getonereciep } from "../../js/actions/recipeActions";
import { IngredientsCard } from "./IngredientsCard";

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneRescip = useSelector((state) => state.receipReducer.oneRescip);
  const loading = useSelector((state) => state.receipReducer.loading);
  // console.log(loading)
  // console.log(oneRescip)
  // console.log(onerescip)
  // const [oneRescip, setOneRescip] = useState({});
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const getoneRecipe = async () => {
    //   try {
    //     const { data } =
    //       await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5%09
    //         `);
    //     setOneRescip(data.recipe);
    //     setLoading(false);
    //   } catch (error) {}
    // };
    // getoneRecipe();
    dispatch(getonereciep(id));
  }, [id, dispatch]);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div >

            <div style={{display:'flex' ,justifyContent:'center'}} >
              <img src={oneRescip.image} alt="" className="card-media" width="300px"  />
              <div className="card-body">
                {/* <span className="card-number card-circle subtle">01</span> */}
                <span className="card-author subtle" />
                <h2 className="card-title">{oneRescip.label}</h2>
         
                <span className="card-description subtle">
                  Meal Type: {oneRescip.mealType.map((el, i) => el)}
                </span>
              </div>
            </div>

          {/* {oneRescip.ingredients.map((el,i) => (
            <ul key={i}
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <li>{el.food}</li>
              foodCategory: <li>{el.foodCategory}</li>
              <li>measure: {el.measure}</li>
              quantity: <li>{el.quantity}</li>
              <li>{el.text} </li>
              weight: <li>{el.weight} </li>
              <img src={el.image} alt="" />
            </ul>
          ))} */}
          <IngredientsCard ing={oneRescip.ingredients} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
