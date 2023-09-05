import React, { useEffect, useState } from "react";
import trash from '../../assets/trash-can.png';
import Header from "../../components/Header/Header";
import RecipeModal from "../../components/RecipeModal/RecipeModal";
import { getRecipeById } from "../../services/recipes";
import "./list.css";
function List(props) {
    const [recipeItems, setRecipeItems] = useState([]);
    const [recipeData, setRecipeData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let myList = JSON.parse(window.localStorage.getItem('prefered'));
        setRecipeItems(myList);
      }, []);
    
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
    
      const deleteAndRefresh = async (id) => {
        let myList = JSON.parse(window.localStorage.getItem('prefered'));
        const objectFiltered = myList.filter(data => data.id == id)
        const newArrayList = myList.filter(arr => {
           return arr.id != objectFiltered[0].id
        });
        setRecipeItems(newArrayList);
      };

  return (
    <>
      <Header logo={["Esplane ", "Recipes"]} links={[["Home", "My List"]]} />
      <section id="mylist-section">
        <h2>Your List</h2>
        <div className="mylist-content">
          <ul className="mylist">
            {recipeItems.map((link, index) => (
              <li key={index} onClick={() => openModal(link.id)}>
                <h4>{link.name}</h4>
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteAndRefresh(link.id);
                  }}
                  src={trash}
                />
              </li>
            ))}
          </ul>
          {isModalOpen && (
            <RecipeModal
              recipeData={recipeData}
              closeModal={closeModal}
              mylist={[true]}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default List;
