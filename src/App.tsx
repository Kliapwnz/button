import React, {MouseEvent} from 'react';
import './App.css';


function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Kevin"!)
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Ivan"!)
    // }
    // const onClickHandler = (name:string) => {
    //     console.log(name)
    const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(100200)

    }
    const foo2 = (name: string) => {
        console.log(name)

    }


    return (
        <div className="App">
            {/*<button onClick={(event) => {*/}
            {/*    console.log("Hello"!)*/}
            {/*}}>MyYouTubeChanel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler("kevin")}> MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler("Ivan")}> MyYouTubeChanel-2</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={(event:MouseEvent<HTMLButtonElement>)=>foo2("100200")}>2</button>

        </div>
    );
}

export default App;
