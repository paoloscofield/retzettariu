import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import RecipePage from "./pages/RecipePage";

// Framer
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/search/:title" element={<RecipePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
