import { createContext, useEffect, useState } from "react";

/*Firebase*/
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

/*Context*/
export const RecipeContext = createContext();

const RecipeContextComponent = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState("");
  const recipesRef = collection(db, "ricette");
  const queryRicette = async () => {
    try {
      const data = await getDocs(recipesRef);
      const recipes = data.docs.map((recipe) => ({
        ...recipe.data(),
        id: recipe.id,
      }));
      await setAllRecipes(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    queryRicette();
  }, []);

  return <RecipeContext.Provider value={allRecipes}>{children}</RecipeContext.Provider>;
};

export default RecipeContextComponent;
