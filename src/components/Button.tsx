import React from "react";

type nameTypeProps={
    name: string
}

export const Button = (props:nameTypeProps) => {
    return (<>
            <button>{props.name}</button>
        </>
    )
}