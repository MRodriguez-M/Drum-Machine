import React from "react";

const Button = (props) => {
    return (
        <>
            <audio src={`/assets/${props.fileName}.mp3`} className="clip" id={props.letter}></audio>
            <button className="drum-pad" onClick={() => props.handleClick(props.letter)}>{props.letter}</button>
        </>
    );
};

export default Button;