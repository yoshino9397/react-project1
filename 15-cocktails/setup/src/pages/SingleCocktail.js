import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();




        
      } catch (err) {}
    }
  });
}
