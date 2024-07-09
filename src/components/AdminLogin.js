import React, { useState } from 'react';
import AdLogin from './AdLogin';
import Admin from './Admin';
import adminlogin from './adminlogin.jpg'
import AdminOne from './AdminOne';
import Admintwo from './Admintwo';

export default function AdminLogin() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [activeButton, setActiveButton] = useState(null); // State to track active button

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    const handleClick = (buttonName) => {
        setActiveButton(buttonName); // Set active button based on clicked button
    };

    return (
        <div>
            {loggedInUser ? (
                <div>
                    <div className='header-container'>
                    <h1 className='display-5' align="center" >Welcome {loggedInUser}</h1>
                    <button onClick={handleLogout} className='logout'>Logout</button>
                    </div>
                    <br /><br />
                    <div className='buttons'>
                        <button onClick={() => handleClick('users')}>
                            Users
                        </button>
                        <button onClick={() => handleClick('restaurants')}>
                            Restaurant List
                        </button>
                        <button onClick={() => handleClick('reservations')}>
                            Reservations
                        </button>
                    </div>
                    {/* Conditional rendering based on activeButton state */}
                    {activeButton === 'users' && <AdminOne />}
                    {activeButton === 'restaurants' && <Admintwo />}
                    {activeButton === 'reservations' && <Admin />}
                </div>
            ) : (
                <div>
                    <AdLogin setLoggedInUser={setLoggedInUser} />
                </div>
            )}
            <img src={adminlogin} alt="adminpage" className='picture'></img>
        </div>
    );
};


