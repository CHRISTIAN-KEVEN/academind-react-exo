import React from 'react';
import UserUi from '../UserUi/UserUi';
import styles from './user-listing.module.css';

const UserListing = ({users}) => {

  return (
    <div className={styles.block}>
    {users && users.length && users.map(user => <UserUi {...user} key={user.id}/>)}
    </div>
  );
}

export default UserListing