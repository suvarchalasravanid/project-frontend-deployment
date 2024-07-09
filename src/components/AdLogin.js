import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; // Import CSS for styling

const AdLogin = ({ setLoggedInUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('https://project-backend-deployment-olav.onrender.com/auth/adlogin', {
                username,
                password
            });

            // Check response from backend (modify according to your backend response structure)
            if (res.status === 200) {
                // Set token in localStorage or session storage
                // localStorage.setItem('token', res.data.token); // Assuming no token is returned
                setLoggedInUser(username); // Set logged-in user state in parent component
                setMessage('Logged in successfully');
            } else {
                setMessage('Failed to login');
            }
        } catch (err) {
            console.error(err.response.data);
            setMessage('Failed to login - wrong credentials');
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p className="message">{message}</p>
        </div>
    );
};

export default AdLogin;
