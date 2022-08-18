import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (username, userAge) => {
    setUsersList((prevUserList) => {
      console.log(prevUserList)
      return [
        ...prevUserList,
        { name: username, age: userAge, id: Math.random().toString() }
      ];
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
