import React from "react";
import Button from "./Button";

const DrumMachine = () => {
    return (
        <>
            <div id="drum-machine">
                <div id="drum-keys">
                    <Button />
                    <Button />
                    <Button />
                </div>
                <div id="display">display</div>
            </div>
        </>
    );
};

export default DrumMachine;