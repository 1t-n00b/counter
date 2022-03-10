import React from "react";

type ButtonPropsType = {
    callback:()=> void
    BOOLEAN_VALUE: boolean
    name:string
}

const BUTTON = (props: ButtonPropsType) => {

    return (
        <div>
            <button onClick={props.callback} disabled={props.BOOLEAN_VALUE}> {props.name}</button>
        </div>
    );
};

export default BUTTON;