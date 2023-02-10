import React from "react";
import Button from "./Button";

const DrumMachine = () => {
    return (
        <>
            <div id="drum-machine">
                <div id="drum-keys">
                    <Button letter="Q" fileName="Heater-1" />
                    <Button letter="W" fileName="Heater-2" />
                    <Button letter="E" fileName="Heater-3" />
                    <Button letter="A" fileName="Heater-4" />
                    <Button letter="S" fileName="Clap" />
                    <Button letter="D" fileName="Open-HH" />
                    <Button letter="Z" fileName="Kick-n-Hat" />
                    <Button letter="X" fileName="Kick" />
                    <Button letter="C" fileName="Closed-HH" />
                </div>
                <div id="display">display</div>
            </div>
        </>
    );
};

export default DrumMachine;