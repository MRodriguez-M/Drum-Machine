import React from "react";

const Button = (props) => {
    const handleClick = () => {
        document.getElementById(props.letter).play();
    };

    return (
        <>
            <audio src={`/assets/${props.fileName}.mp3`} className="clip" id={props.letter}></audio>
            <button type="button" className="drum-pad" onClick={handleClick}>{props.letter}</button>
        </>
    );
};

export default Button;