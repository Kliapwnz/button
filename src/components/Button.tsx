import React from "react";

type nameTypeProps = {
    name: string
}

export const Button = (props: nameTypeProps) => {
    const onClickHandler = () => {

    }
    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}