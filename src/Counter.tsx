import React from "react";
import BUTTON from "./BUTTON"

type CounterPropsType = {
    num: number
    setNum: (number: number) => void
    MAX_VALUE: number
    MIN_VALUE: number
}

const Counter = (props: CounterPropsType) => {

    const h3_Style = {
        color: "red",
    };

    const onClickForUpCounter = () => {
        props.setNum(props.num + 1)

    }
    const onClickForResetNum = () => {
        props.setNum(props.MIN_VALUE)
    }
    let BOOLEAN_VALUE_FOR_ADD = props.num >= props.MAX_VALUE;
    let BOOLEAN_VALUE_FOR_RESET = props.num === props.MIN_VALUE;

    return (
        <div>
            <div className={"title"}>
                <div className={"text"}><h3
                    style={props.num === props.MAX_VALUE ? h3_Style : undefined}>{props.num}</h3></div>
            </div>

            <div className={"btn_group"}>
                <BUTTON callback={onClickForUpCounter} BOOLEAN_VALUE={BOOLEAN_VALUE_FOR_ADD} name={"add"}/>
                <BUTTON callback={onClickForResetNum} BOOLEAN_VALUE={BOOLEAN_VALUE_FOR_RESET} name={"reset"}/>
            </div>
        </div>
    );
};

export default Counter;