import React, { useState } from 'react';
import styles from './user-form.module.css'

const UserForm = props => {

    const {onUserAdd} = props;
    let formData = {};
    const submitFormHandler = (event) => {
        event.preventDefault();
        formData = {name: userName, age: age, id: 100* Math.random()}
        console.log('Event ', event, formData);
        onUserAdd(formData);
        clearInputs();
    }

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState(0);

    function clearInputs() {
        setUserName('');
        setAge('')
    }
    return (
      
        <form onSubmit={submitFormHandler} className={styles.form}>
            <div className={styles['form-group']}>
                <label htmlFor="userName">User name:</label><br />
                <input type="text" className={styles['form-control']} id="userName" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div className={styles['form-group']}>
                <label htmlFor="age">Age (In years):</label><br />
                <input type="number" className={styles['form-control']} id="age" value={age} onChange={(event) => setAge(event.target.value)}/>
            </div>
            <div className={styles['form-group']}>
                <button>Submit</button>
            </div>
        </form>
    
    );
}

export default UserForm;