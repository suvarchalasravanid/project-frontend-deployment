import { useState } from "react";
import RestaurantListRow from "./RestaurantListRow";
import Axios from "axios";
import { useEffect } from "react";
export default function RestaurantList(){
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        Axios.get("https://project-backend-deployment-olav.onrender.com/auth/restaurant")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])
    const ListItems =()=>{
        return arr.map((val,ind)=>{
            return <RestaurantListRow obj={val} />
        })
    }
    return(
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-secondary table-striped">
            <thead>
                <tr>
                    <th class="text-center">Restaurant Name</th>
                    <th class="text-center">Seats Available</th>
                    <th class="text-center">Choose</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}