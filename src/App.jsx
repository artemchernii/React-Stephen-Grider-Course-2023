import { useState } from 'react';
import Button from './components/ui/Button';
import ProfileCard from './components/entities/ProfileCard';
import 'bulma/css/bulma.css';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    const cards = [
        {
            title: 'Alexa',
            handle: '@alexa99',
            image: AlexaImage,
            description: 'Alexa was created by Amazon and helps to buy things.',
        },
        {
            title: 'Cortana',
            handle: '@cortana32',
            image: CortanaImage,
            description:
                'Cortana was made by Microsoft. Who knows what it does?',
        },
        {
            title: 'Siri',
            handle: '@siri01',
            image: SiriImage,
            description: 'Siri was created by Apple. It is virtual assistance.',
        },
    ];
    return (
        <div className="App">
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistance</p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title={cards[0].title}
                                handle={cards[0].handle}
                                image={cards[0].image}
                                description={cards[0].description}
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title={cards[1].title}
                                handle={cards[1].handle}
                                image={cards[1].image}
                                description={cards[1].description}
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title={cards[2].title}
                                handle={cards[2].handle}
                                image={cards[2].image}
                                description={cards[2].description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { App };
