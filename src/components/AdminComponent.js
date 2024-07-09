// // export default AdminComponent;
// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// const AdminComponent = () => {
//   const [reservedData, setReservedData] = useState([]);

//   useEffect(() => {
//     Axios.get('http://localhost:8000/api/reserved-data')
//       .then((res) => {
//         setReservedData(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   const handleAdminButtonClick = () => {
//     // Handle the admin button click event here
//     console.log('Admin button clicked');
//     // You can add more functionality here, like navigating to an admin page or displaying a modal
//   };

//   return (
//     <div>
//       <h2>Reserved Data</h2>
//       <button onClick={handleAdminButtonClick}>Admin Button</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Restaurant Name</th>
//             <th>User ID</th>
//             <th>Seats Reserved</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservedData.map((data) => (
//             <tr key={data._id}>
//               <td>{data.restaurant.name}</td>
//               <td>{data.userId}</td>
//               <td>{data.seatsReserved}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminComponent;
