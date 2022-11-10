import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber) => {
        console.log(subscriber)
    }
    const Button2Foo = (subscriber) => {
        console.log(subscriber)
    }


    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"} callBack={Button1Foo("Im Kevin")} />
            <Button name={"MyYouTubeChanel-2"} callBack={Button2Foo("Im Ivan")}/>

        </div>
    );
}

export default App;