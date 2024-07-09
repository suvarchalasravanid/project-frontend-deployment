//import {Link} from "react-router-dom";
export default function AdmintwoData(props){
    const {name,available_seats} = props.obj;
    return(
        <tr>
            <td class="text-center">{name}</td>
            <td class="text-center">{available_seats}</td>
        </tr>
    )
}