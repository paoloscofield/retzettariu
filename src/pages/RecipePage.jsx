import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import decoration from "../assets/images/decoration.webp";
import { motion, useIsPresent } from "framer-motion";

const RecipePage = () => {
  const location = useLocation();
  const { title, titleIta, time, ingredients, process, url, difficulty, people } = location.state;

  //Framer-motion
  const isPresent = useIsPresent();

  return (
    <>
      <Navbar />
      <main className="recipe-page">
        <div className="hero-img">
          <img src={url} alt={title} className="main-img" />
          <img src={decoration} alt="retzettariu decoration" className="decoration" />
        </div>
        <section className="recipe-page-container">
          <div className="ricetta">
            <h1 className="title">{title}</h1>
            <h3 className="title-ita">{titleIta}</h3>
            <p className="dati">
              <span>Per {people} persone</span>
              <span>Difficoltà: {difficulty}</span>
              <span>Tempo di preparazione: {time}</span>
            </p>
          </div>
          <div className="ingredienti">
            <h3>Ingredienti</h3>
            <ul>
              {ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ul>
          </div>
          <div className="preparazione">
            <h3>Preparazione</h3>
            <p>{process}</p>
          </div>
        </section>

        <section className="ricette-suggerite"></section>
      </main>
      <Footer />

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="change-page"
      />
    </>
  );
};

export default RecipePage;
