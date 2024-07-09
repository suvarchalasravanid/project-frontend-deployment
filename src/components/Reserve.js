import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
//import {Link} from "react-router-dom"
export default function Reserve({ username }) {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", available_seats: 0 });
    const [reservedSeats, setReservedSeats] = useState(0);
    const [deleteSeats, setDeleteSeats] = useState(0);
    const [editSeats, setEditSeats] = useState(0);
    const [userReservedSeats, setUserReservedSeats] = useState(0);

    useEffect(() => {
        // Fetch restaurant details
        Axios.get(`https://project-backend-deployment-olav.onrender.com/auth/extract/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    const { name, available_seats } = res.data;
                    setInitialValue({ name, available_seats });
                } else {
                    return Promise.reject("Failed to fetch restaurant details");
                }
            })
            .catch((err) => {
                alert(err);
            });

        // Fetch user reservation details
        Axios.get(`https://project-backend-deployment-olav.onrender.com/auth/reservation/${id}/${username}`)
            .then((res) => {
                if (res.status === 200) {
                    const { reserved_seats } = res.data;
                    setUserReservedSeats(reserved_seats);
                } else {
                    setUserReservedSeats(0);
                }
            })
            .catch((err) => {
                console.error(err);
                setUserReservedSeats(0);
            });
    }, [id, username]);

    const handleReserve = () => {
        if (reservedSeats <= 0) {
            alert("Please enter a valid number of seats to reserve.");
            return;
        }

        Axios.post(`https://project-backend-deployment-olav.onrender.com/auth/reserve/${id}`, { username, seats: reservedSeats })
            .then((res) => {
                alert("Reservation successful!");
                setInitialValue({ ...initialValue, available_seats: initialValue.available_seats - reservedSeats });
                setUserReservedSeats(userReservedSeats + reservedSeats);
                setReservedSeats(0);
            })
            .catch((err) => {
                alert("Reservation failed. Please try again.");
                console.error("Error:", err);
            });
    };

    const handleDeleteReservation = () => {
        if (deleteSeats <= 0) {
            alert("Please enter a valid number of seats to delete.");
            return;
        }

        Axios.delete(`https://project-backend-deployment-olav.onrender.com/auth/delete/${id}`, { data: { username, seats: deleteSeats } })
            .then((res) => {
                alert("Reservation deletion successful!");
                setInitialValue({ ...initialValue, available_seats: initialValue.available_seats + deleteSeats });
                setUserReservedSeats(userReservedSeats - deleteSeats);
                setDeleteSeats(0);
            })
            .catch((err) => {
                alert("Reservation deletion failed. Please try again.");
                console.error("Error:", err);
            });
    };

    const handleEditReservation = () => {
        if (editSeats <= 0) {
            alert("Please enter a valid number of seats to edit.");
            return;
        }

        Axios.put(`https://project-backend-deployment-olav.onrender.com/auth/edit/${id}`, { username, seats: editSeats })
            .then((res) => {
                alert("Reservation edit successful!");
                const seatsDifference = editSeats - userReservedSeats;
                setInitialValue({ ...initialValue, available_seats: initialValue.available_seats - seatsDifference });
                setUserReservedSeats(editSeats);
                setEditSeats(0);
            })
            .catch((err) => {
                alert("Reservation edit failed. Please try again.");
                console.error("Error:", err);
            });
    };

    return (
        <div>
            <h2>Restaurant Name: {initialValue.name}</h2>
            <h3>Total Available Seats: {initialValue.available_seats}</h3>
            <h3>No. of Seats Reserved by You: {userReservedSeats}</h3>
            <label>
                No. of Seats to Reserve:{" "}
                <input
                    type="number"
                    value={reservedSeats}
                    onChange={(e) => setReservedSeats(parseInt(e.target.value))}
                />
            </label>
            <button onClick={handleReserve} style={{marginLeft:"20px"}}>Reserve</button>
            <br /><br />
            <label>
                No. of Seats to Delete:{" "}
                <input
                    type="number"
                    value={deleteSeats}
                    onChange={(e) => setDeleteSeats(parseInt(e.target.value))}
                />
            </label>
            <button onClick={handleDeleteReservation} style={{marginLeft:"20px"}}>Delete Reservation</button>
            <br /><br />
            <label>
                Edit No. of Reserved Seats:{" "}
                <input
                    type="number"
                    value={editSeats}
                    onChange={(e) => setEditSeats(parseInt(e.target.value))}
                />
            </label>
            <button onClick={handleEditReservation} style={{marginLeft:"20px"}}>Edit Reservation</button>
            {/* <button><Link to="signIn">Go back</Link></button> */}
        </div>
    );
}
