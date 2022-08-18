import React, { useContext, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
import { useContext } from 'react/cjs/react.production.min';

function App() {
  const context = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!context.isLoggedIn && <Login onLogin={loginHandler} />}
        {context.isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
