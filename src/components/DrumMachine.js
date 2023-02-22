import React, { useEffect, useState } from "react";
import Button from "./Button";

const buttonData = {
    "Q": "Heater-1",
    "W": "Heater-2",
    "E": "Heater-3",
    "A": "Heater-4",
    "S": "Clap",
    "D": "Open-HH",
    "Z": "Kick-n-Hat",
    "X": "Kick",
    "C": "Closed-HH"  
}

const DrumMachine = () => {
    const [soundName, setSoundName] = useState('Click or press key');

    const handleKeyDown = (event) => {
        document.getElementById(event.key.toUpperCase()).play();
        setSoundName(buttonData[event.key.toUpperCase()]);
    };

    const handleClick = (letter, fileName) => {
        document.getElementById(letter).play();
        setSoundName(fileName);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div id="drum-machine">
                <div id="drum-keys">
                    {Object.keys(buttonData).map(letter => 
                        <Button letter={letter} key={letter} fileName={buttonData[letter]} handleClick={handleClick} />
                    )}
                </div>
                <div id="display">{soundName}</div>
            </div>
        </>
    );
};

export default DrumMachine;