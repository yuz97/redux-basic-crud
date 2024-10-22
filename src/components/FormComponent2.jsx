// src/UserForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './actions';

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email };

        dispatch(createUser(userData));
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create User</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default UserForm;
