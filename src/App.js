
import { useState } from 'react';
import styles from './App.module.css';
import UserForm from './components/user-form/user-form';
import UserListing from './components/user-listing/user-listing';

function App() {

  const [users, setUsers] = useState([]);

  const onUserAddHandler = (event) => {
    console.log('event ', event);
    setUsers(previousUsers => [event, ...previousUsers])
  }

  return (
   <div className={styles.app}>
    <UserForm onUserAdd={onUserAddHandler}/>
    {users && users.length && <UserListing users={users}/>}
   </div>
  );
}

export default App;
