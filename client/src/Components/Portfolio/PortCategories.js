import React from 'react';
// import { NavLink } from "react-router-dom";

function PortCategories({ filter, categories }) {
  return (
    <div className="portCategories">

      {
        categories.map((catList, i) => {
          return (
            <button key={i}
              className="portCategories__filter-btn"
              type="button"
              onClick={() => filter(catList)}>{catList}
            </button>
          )
        })
      }


    </div>
  )
}

export default PortCategories;
