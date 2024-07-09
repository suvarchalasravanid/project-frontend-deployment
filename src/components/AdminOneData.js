//import {Link} from "react-router-dom";
export default function AdminOneData(props){
    const {username,password} = props.obj;
    return(
        <tr>
            <td class="text-center">{username}</td>
            <td class="text-center">{password}</td>
        </tr>
    )
}