import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const authCtx = useContext(AuthContext);

    if (isLogin) {

    }
    else {
      setIsLoading(true);
      let url;
      if (isLogin) {
        url = `url_for_logout`
      }
      else {
        url = `url_for_new`
      }

      fetch(url, {
        method: `POST`,
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': `application-json`
        }
      }).then((res) => {
        if (res.ok) {
          setIsLoading(false);
          // 
        }
        else {
          res.json().then((data) => {
            let errorMessage = `Failed to login`;
            throw new Error(errorMessage);
          });
        }
        res.json().then((data) => {
          const expirationTime = +(data.expiresIn * 1000);
          authCtx.login(data.idToken, expirationTime);
          history.replace(`/`);
        })
      }).catch((err) => {
        alert(err.message);
      })
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
