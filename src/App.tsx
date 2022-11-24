import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";


function App() {
    let [message, setMessage] = useState([
        {message: "Hello all"},
        {message: "I try to win"},
        {message: "London is the capital of Great Britain"},
    ])
const addMessage = (title:string) => {
    console.log("aaaaaaa")
}
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
            <FullInput addMessage={addMessage}/>

            <div>
                {message.map((el,index)=>{
                    return(
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

            <div>
                <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Im Kevin", 21)}/>
                <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Im Ivan")}/>
                <Button name={"Hello"} callBack={() => Button3Foo("Im Stupid Button")}/>
            </div>

        </div>
    );
}

export default App;