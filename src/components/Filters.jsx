import React, { useState } from "react";

const Filters = ({ filter }) => {
  const [sorted, setSorted] = useState("");

  const handleChangeFilter = (e) => {
    setSorted(e.target.value);
    filter(e.target.value);
  };

  return (
    <>
      <h3>Filtri</h3>
      <div className="filter__container">
        <div className="filter__ordina">
          <fieldset>
            <legend>Ordina:</legend>
            <div className="radio-container">
              <input type="radio" name="alphabetical" id="az" value="az" onChange={() => filter("az")} />
              <label htmlFor="az">Dalla A alla Z</label>
            </div>
            <div>
              <input type="radio" name="alphabetical" id="za" value="za" onChange={() => filter("za")} />
              <label htmlFor="za">Dalla Z alla A</label>
            </div>
          </fieldset>
        </div>
        <div className="filter__titolo">
          <fieldset>
            <legend>Cerca nel titolo</legend>
            <input
              type="text"
              name="searchTitle"
              id="searchTitle"
              value={sorted}
              onChange={handleChangeFilter}
              placeholder="Inserisci una parola chiave..."
            />
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Filters;
