import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {


    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"}/>
            <Button name={"MyYouTubeChanel-2"}/>
            <Button name={"Delete"}/>

        </div>
    );
}

export default App;