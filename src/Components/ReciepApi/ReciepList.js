import React from "react";
import RecipCard from "./RecipCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallrecieps } from "./../../js/actions/recipeActions";
import Search from "./Search";
function ReciepList() {
  const [searchedvalue, setsearchedvalue] = useState("chicken");
  const handelsearch = (value) => {
    setsearchedvalue(value);
  };
  // {data}
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallrecieps(searchedvalue));
  }, [searchedvalue, dispatch]);
  const list = useSelector((state) => state.receipReducer.listrecieps);
  const loading = useSelector((state) => state.receipReducer.loading);
  // console.log(loading);
  // console.log(list);
  return (
    <div>
      {loading ? (
        "loading ...."
      ) : (
        <div>
          <Search handelsearch={handelsearch} searchedvalue={searchedvalue} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {" "}
            {list.map((el, index) => (
              <RecipCard key={index} el={el} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReciepList;
