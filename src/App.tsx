import React, {useState} from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
    let MIN_VALUE = 0
    let MAX_VALUE = 7

    let [num, setNum] = useState<number>(MIN_VALUE)
    return (
        <div className="App">
            <Counter num={num} setNum={setNum} MIN_VALUE={MIN_VALUE} MAX_VALUE={MAX_VALUE}/>
        </div>
    );
}

export default App;
