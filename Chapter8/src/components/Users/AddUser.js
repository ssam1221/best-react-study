import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css"

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState(``);
    // const [enteredAge, setEnteredAge] = useState(``);
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: `Invalid input`,
                message: `Please enter a valid name and age (non-empty values).`
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: `Invalid age`,
                message: `Please enter a valid age (> 0).`
            });
            return;
        }

        // props.onAddUser(enteredUsername, enteredAge);
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = ``;
        ageInputRef.current.value = ``;
        // setEnteredUsername(``);
        // setEnteredAge(``);
    }

    // const userNameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {
                error &&
                <ErrorModal
                    title="An error occured!"
                    message="Something went wrong!"
                    onConfirm={errorHandler}
                />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={userNameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label
                        htmlFor="age"
                    >Age (Years)</label>
                    <input
                        id="age"
                        type="text"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;