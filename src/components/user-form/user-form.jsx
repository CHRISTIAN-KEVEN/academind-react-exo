import React from 'react';

const UserForm = props => {

    const submitFormHandler = (event) => {
        console.log('Event ', event)
    }

    return (
      
        <form onSubmit={submitFormHandler}>
            <div className='form-group'>
                <label for="userName">User name:</label>
                <input type="text" className='form-control' id="userName"/>
            </div>
            <div>
            <label for="userName">User name:</label>
                <input type="text" className='form-control' id="userName"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    
    );
}

export default UserForm;