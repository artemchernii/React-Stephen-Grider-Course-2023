import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/bird.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import { useState } from 'react';
import './AnimalShow.css';
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
};
function AnimalShow({ type }) {
    const [heartSize, setHeartSize] = useState(0);
    const handleClick = () => {
        setHeartSize(heartSize + 20);
    };

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={svgMap[type]} width={200} alt={type} />
            <img className="heart" src={heart} alt={heart} width={heartSize} />
        </div>
    );
}

export default AnimalShow;
