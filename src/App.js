import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

const getRandomAnimal = () => {
    const animals = ['cow', 'bird', 'cat', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => (
        <AnimalShow key={index} type={animal} />
    ));

    return (
        <div className="container">
            <h1>Animals: </h1>
            <button onClick={handleClick}>Add number</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}
export default App;
