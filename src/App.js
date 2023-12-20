import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function randomAnimals(){
    const animal = ['bird','cow','cat','dog','gator','horse'];

    return animal[Math.floor(Math.random() * animal.length)];
}

function App(){
    const [animals, setAnimals] = useState([]);
    const handleClick = () =>{
        setAnimals([...animals, randomAnimals()]);   
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    });
    return <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
}

export default App;