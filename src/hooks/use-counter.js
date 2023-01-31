import { useEffect, useState } from "react";

// in custom hooks function name must start with 'use' keyword
const useCounter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return counter
}

export default useCounter
