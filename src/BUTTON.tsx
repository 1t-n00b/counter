import React from "react";

type ButtonPropsType = {
    onClick?: ()=> void
    disabled?: boolean
    name:string
}

const BUTTON = (props: ButtonPropsType) => {

    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled}> {props.name}</button>
        </div>
    );
};

export default BUTTON;