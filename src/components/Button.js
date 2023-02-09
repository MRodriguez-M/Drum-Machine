import React from "react";

const Button = (props) => {
    const handleClick = () => {
        document.getElementById("Q").play();
    };

    return (
        <>
            <audio src="/assets/Heater-1.mp3" className="clip" id="Q"></audio>
            <button type="button" className="drum-pad" onClick={handleClick}>{props.letter}</button>
        </>
    );
};

export default Button;