import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueInputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== ``);


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes(`@`));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    // const enteredValue = nameInputRef.current.value;
  }

  const nameInputClasses = nameInputHasError ? `form-control invalid` : `form-control`;
  const emailInputClasses = emailInputHasError ? `form-control invalid` : `form-control`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />

        {
          nameInputHasError && <p className="error-text">
            Name must not be empty.
          </p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>


      {/* Email */}
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />

        {
          emailInputHasError && <p className="error-text">
            Invalid email address.
          </p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
