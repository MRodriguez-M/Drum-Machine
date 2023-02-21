import React, { useEffect } from "react";
import Button from "./Button";

const DrumMachine = () => {
    const handleKeyDown = (event) => {
        document.getElementById(event.key.toUpperCase()).play();
        console.log('A key was pressed', event.key);
    };

    const handleClick = (letter) => {
        document.getElementById(letter).play();
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
                    <Button letter="Q" fileName="Heater-1" handleClick={handleClick} />
                    <Button letter="W" fileName="Heater-2" handleClick={handleClick} />
                    <Button letter="E" fileName="Heater-3" handleClick={handleClick} />
                    <Button letter="A" fileName="Heater-4" handleClick={handleClick} />
                    <Button letter="S" fileName="Clap" handleClick={handleClick} />
                    <Button letter="D" fileName="Open-HH" handleClick={handleClick} />
                    <Button letter="Z" fileName="Kick-n-Hat" handleClick={handleClick} />
                    <Button letter="X" fileName="Kick" handleClick={handleClick} />
                    <Button letter="C" fileName="Closed-HH" handleClick={handleClick} />
                </div>
                <div id="display">display</div>
            </div>
        </>
    );
};

export default DrumMachine;