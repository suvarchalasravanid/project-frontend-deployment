import React, { useState, useEffect } from "react";
import Axios from "axios";
import AdminData from "./AdminData";

export default function Admin() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://project-backend-deployment-olav.onrender.com/auth/printreserverestname")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <AdminData key={val._id} obj={val} />;
    });
  };

  return (
    <table style={{ maxWidth: "60%", margin: "50px auto" }} className="table table-bordered table-secondary table-striped">
      <thead>
        <tr>
          <th className="text-center">User Name</th>
          <th className="text-center">Reserved Seats</th>
          <th className="text-center">Restaurant</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {ListItems()}
      </tbody>
    </table>
  );
}
