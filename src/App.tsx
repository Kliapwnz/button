import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Im Kevin", 21)}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Im Ivan")}/>
            <Button name={"Hello"} callBack={() => Button3Foo("Im Stupid Button")}/>
        </div>
    );
}

export default App;