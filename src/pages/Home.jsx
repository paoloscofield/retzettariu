import { useEffect, useState, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeItem from "../components/RecipeItem";
import search from "../assets/icons/search.svg";

/*Context*/
import { RecipeContext } from "../assets/context/RecipeContextComponent";

// Framer-motion
import { motion, useIsPresent } from "framer-motion";

function Home() {
  const allRecipes = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [searchParameter, setSearchParameter] = useSearchParams();
  const navigate = useNavigate();

  // Framer-motion
  const isPresent = useIsPresent();

  useEffect(() => {
    setSearchParameter("");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParameter({ recipe: query });
    navigate(`/search?recipe=${query}`);
  };

  const handleAllRecipes = () => {
    setQuery("");
    setSearchParameter({ recipe: query });
    navigate(`/search?recipe=${query}`);
  };

  const handleCasualRecipe = () => {
    const casualNum = Math.floor(Math.random() * allRecipes.length - 1) + 1;
    const titleRandom = allRecipes[casualNum].title;
    navigate(`/search/${titleRandom}`, {
      state: allRecipes[casualNum],
    });
  };

  return (
    <>
      <Navbar page={true} />
      <main>
        <section className="search">
          <h4 className="search__subtitle">RICETTARIO SARDO ONLINE</h4>
          <h1 className="search__title">I sapori della Sardegna</h1>
          <h4 className="search__action">Cerca la tua ricetta</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button type="submit" className="submit">
              <img src={search} alt="icon search" />
            </button>
          </form>
          <h4 className="search__action">oppure</h4>
          <div className="search__buttons">
            <button onClick={handleAllRecipes} className="primary">
              SCOPRI TUTTE LE RICETTE
            </button>
            <button onClick={handleCasualRecipe} className="secondary">
              RICETTA CASUALE
            </button>
          </div>
        </section>
        <section className="list">
          <h2 className="list__title">Le ricette più cercate</h2>
          <div className="recipe-list">
            {allRecipes.length == 0 ? (
              <h2>Loading...</h2>
            ) : (
              allRecipes.slice(0, 3).map((recipe) => {
                return <RecipeItem key={recipe.title} recipe={recipe} />;
              })
            )}
          </div>
        </section>
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
}

export default Home;
