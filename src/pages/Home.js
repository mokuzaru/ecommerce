import {useState} from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";



const Home = () => {
  const options = [
    { value: '1', label: 'Prometeo'},
    { value: '2', label: 'Wuju'}
  ]

  const selectedOption = useState("")

  const handleChange = () => {
    console.log('lo hicimos')
  }

  return (
    <div id="home">
      <Hero list={hotDropsData} />

      <p id="card-list-header-text"> Deus Store </p>
      <div id="list-container">
        <div className='content'>
          <div className='filter'>
            <h3>Codigo</h3>
          </div>
          <CardList list={hotDropsData} />
        </div> 
      </div>

    </div>
  );
};

export default Home;
