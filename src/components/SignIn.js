import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Booking from './Booking';
import sign from './img.png'

const SignIn = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    return (
        <div>
                        <img src={sign} alt="Reserved" className="sign"></img>
            {loggedInUser ? (
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Example background color with transparency
                        padding: '20px',
                        borderRadius: '5px',
                        textAlign: 'center',
                    }}
                >
                    <p>Welcome {loggedInUser}</p>
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            marginTop: '10px',
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    <div style={{ marginTop: '20px' }}>
                        <Booking />
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '20px',
                        borderRadius: '5px',
                        textAlign: 'center',
                    }}
                >
                    <Register />
                    <Login setLoggedInUser={setLoggedInUser} />
                </div>
            )}
        </div>
    );
};

export default SignIn;
