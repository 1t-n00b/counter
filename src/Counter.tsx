import React from "react";
import BUTTON from "./BUTTON"

type CounterPropsType = {
    num: number
    setNum: (number: number) => void
    maxValue: number
    minValue: number
}

const Counter = (props: CounterPropsType) => {

    const h3_Style = {
        color: "red",
    };

    const onClickForUpCounter = () => {
        props.setNum(props.num + 1)

    }
    const onClickForResetNum = () => {
        props.setNum(props.minValue)
    }

    let BOOLEAN_VALUE_FOR_ADD = props.num >= props.maxValue;
    let BOOLEAN_VALUE_FOR_RESET = props.num === props.minValue;

    const styleForHeader = props.num === props.maxValue ? h3_Style : undefined

    return (
        <div>
            <div className={"title"}>
                <div className={"text"}>
                    <h3 style={styleForHeader}>{props.num}</h3>
                </div>
            </div>

            <div className={"btn_group"}>
                <BUTTON onClick={onClickForUpCounter} disabled={BOOLEAN_VALUE_FOR_ADD} name={"add"}/>
                <BUTTON onClick={onClickForResetNum} disabled={BOOLEAN_VALUE_FOR_RESET} name={"reset"}/>
            </div>
        </div>
    );
};

export default Counter;