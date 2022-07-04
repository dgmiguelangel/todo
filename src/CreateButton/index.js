import React from "react";
import './CreateButton.css';

function CreateButton(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <button 
            className="CreateButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateButton};