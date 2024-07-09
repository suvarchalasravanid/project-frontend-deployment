import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; // Import CSS for styling

const Login = ({ setLoggedInUser }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, 
                                      [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = 
                await axios.post('https://project-backend-deployment-olav.onrender.com/api/auth/login', 
            {
                username,
                password
            });
            localStorage.setItem('token', res.data.token);
            setLoggedInUser(username);
            
            // Set success message
            setMessage('Logged in successfully');
        } catch (err) {
            console.error(err.response.data);
            // Set error message
            setMessage('Failed to login - wrong credentials');         
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="text" 
                       placeholder="Username" 
                       name="username" 
                       value={username} 
                       onChange={onChange} 
                       required />
                <input type="password" 
                       placeholder="Password" 
                       name="password" 
                       value={password} 
                       onChange={onChange} 
                       required />
                <button type="submit">Login</button>
            </form>
            <p className="message">{message}</p>
        </div>
    );
};

export default Login;

