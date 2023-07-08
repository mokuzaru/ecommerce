import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";



const Home = () => {


  return (
    <div id="home">
      <Hero list={hotDropsData} />

      <p id="card-list-header-text"> Blumer NFT's </p>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div>
    </div>
  );
};

export default Home;
