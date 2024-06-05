import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeItem from "../components/RecipeItem";
import Filters from "../components/Filters";
import { useSearchParams } from "react-router-dom";

/*Context*/
import { RecipeContext } from "../assets/context/RecipeContextComponent";

// Framer
import { motion, useIsPresent } from "framer-motion";

const SearchResult = () => {
  const [getQuery] = useSearchParams();
  const searchTerm = getQuery.get("recipe").toLowerCase();

  const allRecipes = useContext(RecipeContext);

  const [queryResult, setQueryResult] = useState("");
  const [filterResult, setFilterResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const isPresent = useIsPresent();

  const sortAZ = (list) => {
    const newList = list.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return newList;
  };

  const sortZA = (list) => {
    const newList = list.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
    return newList;
  };

  const q = () => {
    if (allRecipes.length != 0) {
      const result = allRecipes.filter((recipe) => {
        if (recipe.title.toLowerCase().includes(searchTerm)) {
          return recipe;
        }
      });
      const resultSorted = sortAZ(result);
      setQueryResult(resultSorted);
      setFilterResult(resultSorted);
      setIsLoading(false);
    }
  };

  const handleFilter = async (filterVar) => {
    setIsLoading(true);
    let sortedRecipes;
    switch (filterVar) {
      case "az":
        sortedRecipes = sortAZ(queryResult);
        break;
      case "za":
        sortedRecipes = sortZA(queryResult);
        break;
      default:
        sortedRecipes = queryResult.filter((recipe) => {
          return recipe.title.toLowerCase().includes(filterVar.toLowerCase());
        });
    }
    await setFilterResult(sortedRecipes);
    setIsLoading(false);
  };

  useEffect(() => {
    q();
  }, [allRecipes]);

  return (
    <>
      <Navbar />
      <main className="search-results-container">
        <aside>
          <Filters filter={handleFilter} />
        </aside>

        <section className="search-section">
          {isLoading ? (
            <h3>Loading</h3>
          ) : filterResult.length !== 0 ? (
            <div className="recipe-list">
              {filterResult.map((recipe) => {
                return <RecipeItem key={recipe.title} recipe={recipe} />;
              })}
            </div>
          ) : (
            <h3>Nessuna ricetta trovata per "{searchTerm}"</h3>
          )}
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
};

export default SearchResult;
