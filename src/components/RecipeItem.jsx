import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const { title, titleIta, people, difficulty, time, url } = recipe;
  return (
    <article className="recipeItem" style={{ backgroundImage: `url(${url})` }}>
      <div>
        <h2 className="recipeItem__title">{title}</h2>
        <h5 className="recipeItem__title-ita">{titleIta}</h5>
        <hr />

        <p className="recipeItem__info">
          <span>{people} persone</span>
          <span>{difficulty}</span>
          <span>{time}</span>
        </p>
        <div className="read-more-container">
          <Link to={`/search/${title}`} className="read-more" state={recipe}>
            Leggi
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RecipeItem;
