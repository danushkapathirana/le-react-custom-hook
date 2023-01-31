import React from "react";

import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
    const counter = useCounter(0)

    return(
        <Card>{counter}</Card>
    )
}

export default ForwardCounter
