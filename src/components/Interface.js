import {useState} from "react";
import { useParams } from "react-router-dom";
import React from "react"
import Login from "./Login"
import Reserve from "./Reserve"
import log from "./BackgroundImage.jpeg"
export default function Interface(){
    const { id } = useParams(); 
    const [loggedInUser, setLoggedInUser] = useState(null);

    return(
        <div>
             <img src={log} alt="Reserved" className="sign"></img>
            {!loggedInUser ? (
                <Login setLoggedInUser={setLoggedInUser} />
            ) : (
                <Reserve id={id}
                        username={loggedInUser} />
            )}
        </div>
    )
}
