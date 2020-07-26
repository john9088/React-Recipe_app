import React from "react";
import style from "./recipes.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  var cal = "" + calories;
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((items) => (
          <li>{items.text}</li>
        ))}
      </ol>
      <p>
        <b>Calories: </b>
        {cal.substring(0, 7)}
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
