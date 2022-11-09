import React from 'react';
import './App.css';


function App() {
    const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log("Hello Im Kevin"!)
    }
    const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log("Hello Im Ivan"!)
    }
    return (
        <div className="App">
            {/*<button onClick={(event) => {*/}
            {/*    console.log("Hello"!)*/}
            {/*}}>MyYouTubeChanel-1*/}
            {/*</button>*/}
            <button onClick={myFirstSubscriber}> MyYouTubeChanel-1</button>
            <button onClick={mySecondSubscriber}> MyYouTubeChanel-2</button>
        </div>
    );
}

export default App;
