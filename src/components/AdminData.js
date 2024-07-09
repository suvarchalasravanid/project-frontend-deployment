import React from "react";
import Axios from "axios";

const AdminData = ({ obj }) => {
  const handleClick = () => {
    const { restaurant, reserved_seats } = obj;

    Axios.delete(`https://project-backend-deployment-olav.onrender.com/auth/delete/${restaurant._id}`, {
      data: {
        username: obj.username,
        seats: reserved_seats
      }
    })
    .then((res) => {
      if (res.status === 200) {
        alert("Reservation deleted successfully");
        window.location.reload(); // Reload page to reflect changes
      } else {
        Promise.reject();
      }
    })
    .catch((err) => {
      console.error("Error deleting reservation:", err);
      alert("Error deleting reservation");
    });
  };

  return (
    <tr>
      <td className="text-center">{obj.username}</td>
      <td className="text-center">{obj.reserved_seats}</td>
      <td className="text-center">{obj.restaurant.name}</td>
      <td className="text-center">
        <button onClick={handleClick} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminData;
