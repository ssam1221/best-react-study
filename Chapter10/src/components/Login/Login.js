import React, { useState, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if (action.type === `USER_INPUT`) {
    return { value: action.val, isValid: action.val.includes(`@`) }
  }
  else if (action.type === `INPUT_BLUR`) {
    return { value: state.value, isValid: state.valid.includes(`@`) }
  }
  return { value: ``, isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === `USER_INPUT`) {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  else if (action.type === `INPUT_BLUR`) {
    return { value: state.value, isValid: action.val.trim().length > 6 }
  }
  return { value: ``, isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispathEmail] = useReducer(emailReducer, {
    value: ``,
    isValid: false
  });
  const [passwordState, dispathPassword] = useReducer(passwordReducer, {
    value: ``,
    isValid: false
  });

  const context = useContext(AuthContext);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       setEmailIsValid(enteredEmail.includes('@')) && setPasswordIsValid(enteredPassword.trim().length > 6)
  //     )
  //   }, 500);

  //   return () => {
  //     clearTimeout(identifier);
  //   }
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    dispathEmail({ type: `USER_INPUT`, val: event.target.value })
    setFormIsValid(
      emailState.isValid && (event.target.value.trim().length > 6)
    )
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    event.target.value.includes(`@`) && (enteredPassword.trim().length > 6)

  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEvent({ type: `INPUT_BLUR` })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
