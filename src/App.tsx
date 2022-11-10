import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = () => {
        console.log("Im Kevin")
    }
    const Button2Foo = () => {
        console.log("Im Ivan")
    }


    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"} callBack={Button1Foo}/>
            <Button name={"MyYouTubeChanel-2"} callBack={Button2Foo}/>

        </div>
    );
}

export default App;