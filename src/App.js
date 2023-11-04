import React, { useState, useEffect } from 'react';

function RandomColorComponent() {
    const [color, setColor] = useState(getRandomColor);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(getRandomColor());
        }, 5000);


        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let newColor = '#';
        for (let i = 0; i < 6; i++) {
            newColor += letters[Math.floor(Math.random() * 16)];
        }
        return newColor;
    }

    return (
        <div style={{ backgroundColor: color, width: '100vw', height: '100vh' }}>
            <h1>Случайный цвет каждые 5 секунд</h1>
        </div>
    );
}

export default RandomColorComponent;
