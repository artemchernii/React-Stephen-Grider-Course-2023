import { useState } from 'react';
import Button from './components/ui/Button';
import ProfileCard from './components/entities/ProfileCard';

function App() {
    const cards = [
        { title: 'Alexa', handle: '@alexa99' },
        { title: 'Cordana', handle: '@cortana32' },
        { title: 'Siri', handle: '@siri01' },
    ];
    return (
        <>
            <div>Personal Digital Assistance</div>

            <hr />
            <ProfileCard title={cards[0].title} handle={cards[0].handle} />
            <ProfileCard title={cards[1].title} handle={cards[1].handle} />
            <ProfileCard title={cards[2].title} handle={cards[2].handle} />
        </>
    );
}

export { App };
