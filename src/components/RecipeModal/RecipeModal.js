import React, { useState } from "react";
import "./recipemodal.css";

function RecipeModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const recipeData = props.recipeData;

  const closeModal = () => {
    setIsModalOpen(false);
    props.closeModal();
  };

  const insertPreferedRecipe = (recipeData) => {
    let arrayToPushMyList = new Array();
    let insertData = {
      id: recipeData.id,
      name: recipeData.title,
    };
    let preferedList = JSON.parse(window.localStorage.getItem('prefered'));
    if (!preferedList) {
      arrayToPushMyList.push(insertData);
      window.localStorage.setItem('prefered', JSON.stringify(arrayToPushMyList));

    } 
    if (preferedList && preferedList.length > 1) {
      preferedList.push(insertData);
      window.localStorage.setItem('prefered', JSON.stringify(preferedList));

    } 
    if (preferedList && preferedList.length == 1) {
      arrayToPushMyList.push(...preferedList, insertData);
      window.localStorage.setItem('prefered', JSON.stringify(arrayToPushMyList));
    } 
    alert("Receita adicionada a sua lista");
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={recipeData.image} />
            <div className="content-info">
              <h3>{recipeData.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: recipeData.summary }}></p>
              {!props.mylist ? (
                <button onClick={() => insertPreferedRecipe(recipeData)}>
                  Add to My prefered list
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeModal;
