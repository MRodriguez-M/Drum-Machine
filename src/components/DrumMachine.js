import React from "react";
import Button from "./Button";

const DrumMachine = () => {
    return (
        <>
            <div id="drum-machine">
                <div id="drum-keys">
                    <Button letter="Q" />
                    <Button letter="W" />
                    <Button letter="E" />
                    <Button letter="A" />
                    <Button letter="S" />
                    <Button letter="D" />
                    <Button letter="Z" />
                    <Button letter="X" />
                    <Button letter="C" />
                </div>
                <div id="display">display</div>
            </div>
        </>
    );
};

export default DrumMachine;