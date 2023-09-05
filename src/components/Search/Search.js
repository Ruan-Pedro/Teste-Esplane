import React, { useEffect, useState } from "react";
import { getRecipeById, getRecipesByName } from "../../services/recipes";
import RecipeModal from "../RecipeModal/RecipeModal";
import "./search.css";

function Search(props) {
  const [searchName, setSearchName] = useState("");
  const [recipeResults, setRecipeResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    if (searchName) {
      getRecipesByName(searchName).then((data) => {
        setTimeout(() => {
        setRecipeResults(data.results);
        }, 1000);
      });
    } else setRecipeResults([]);
  }, [searchName]);

  const handleSearch = (data) => {
    setSearchName(data);
  };

  const openModal = (id) => {
    setIsModalOpen(true);
    getRecipeById(id).then((data) => {
      setRecipeData(data);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRecipeData({});
  };

  return (
    <>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search Recipes..."
          value={searchName}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="recipe-results">
        {recipeResults.map((recipeData) => (
          <div className="recipe-cards" key={recipeData.id}>
            <img src={recipeData.image} alt={recipeData.title} />
            <h4>{recipeData.title}</h4>
            <span onClick={() => openModal(recipeData.id)}>Show More</span>
          </div>
        ))}
      </div>

      {isModalOpen && (
            <RecipeModal recipeData={recipeData} closeModal={closeModal} />
          )}
    </>
  );
}
export default Search;
