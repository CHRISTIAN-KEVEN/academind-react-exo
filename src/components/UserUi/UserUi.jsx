import React from 'react';
import styles from './UserUi.module.css'

const UserUi = props => {
    const {name, age} = props
  return (
    <p className={styles.block}>
        {`${name} (${age} year${age > 1 ? 's': ''} old)`}
    </p>
  )
}

export default UserUi