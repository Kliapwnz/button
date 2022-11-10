import React from "react";

type nameTypeProps = {
    name: string
}

export const Button = (props: nameTypeProps) => {
    const onClickHandler = () => {
        console.log("Im Kevin")
    }
    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}