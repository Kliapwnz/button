import React from "react";

type nameTypeProps = {
    name: string
    callBack:()=>void
}

export const Button = (props: nameTypeProps) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}