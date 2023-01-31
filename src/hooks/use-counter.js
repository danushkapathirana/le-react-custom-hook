import { useEffect, useState } from "react";

// in custom hooks function name must start with 'use' keyword
const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(forward) {
                setCounter((prevCounter) => prevCounter + 1)
            } else {
                setCounter((prevCounter) => prevCounter - 1)
            }
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return counter
}

export default useCounter
