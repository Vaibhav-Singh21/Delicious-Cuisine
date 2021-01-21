import React from "react";
import "./styles.css";
import { useState } from "react";

const cuisineDB = {
  Indian: [
    { name: "Chhole Bhature", rating: "5/5" },
    { name: "Dal Bhati Churma", rating: "5/5" },
    { name: "Biryani", rating: "5/5" },
    { name: "Mutton Rogan josh", rating: "5/5" }
  ],

  Italian: [
    { name: "Risotto", rating: "3/5" },
    { name: "PASTA", rating: "4.5/5" },
    { name: "Lasagna", rating: "3.5/5" }
  ],
  continental: [
    {
      name: "Roast chicken",
      rating: "4.5/5"
    },
    {
      name: "Lobster Thermidor.",
      rating: "2/5"
    }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("Indian");

  function genreClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        🍔🍕 Delicious <em>Cuisine</em> 🥞🍜
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout these Cuisines. Select a type to get started{" "}
      </p>

      <div>
        {Object.keys(cuisineDB).map((type) => (
          <button
            key={type}
            onClick={() => genreClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {cuisineDB[selectedType].map((Cuisine) => (
            <li
              key={Cuisine.name}
              style={{
                backgroundColor: "white",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Cuisine.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                <span>⭐ </span>: {Cuisine.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
