import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import AdminOneData from "./AdminOneData";
export default function AdminOne(){
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        Axios.get("https://project-backend-deployment-olav.onrender.com/auth/")
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
            return <AdminOneData obj={val} />
        })
    }
    return(
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-secondary table-striped">
            <thead>
                <tr>
                    <th class="text-center">User Name</th>
                    <th class="text-center">Password</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}