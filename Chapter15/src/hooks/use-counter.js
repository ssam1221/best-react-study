import { useState, useEffect } from 'react';


const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const diff = forwards ? 1 : -1;
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + diff);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;