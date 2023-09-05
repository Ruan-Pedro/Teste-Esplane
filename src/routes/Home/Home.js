import React from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import "./home.css";

function Home(props) {
  return (
      <>
      <Header
        logo={["Esplane ", "Recipes"]}
        links={[
          ["Home", "My List"],
        ]}
      />
      <Search/>
      {/* <Banner />
      {categories.map((link, index) => (
        <Lists key={index} category={link} flexbg={index} />
      ))}
      <Footer /> */}
      </>
  );
}

export default Home;
