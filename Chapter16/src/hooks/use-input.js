import { useEffect, useRef, useState } from "react";


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState(``);
    const [isTouched, setIsTouched] = useState(false);


    const valudIsValid = validateValue(enteredValue);
    const hasError = !valudIsValid && isTouched;

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue(``);
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valudIsValid,
        hasError,
        valueInputChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;