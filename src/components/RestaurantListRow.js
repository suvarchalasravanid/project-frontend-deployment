import {Link} from "react-router-dom";
export default function RestaurantListRow(props){
    const {_id,name,available_seats} = props.obj;
    return(
        <tr>
            <td class="text-center">{name}</td>
            <td class="text-center">{available_seats}</td>
            <td class="text-center d-flex justify-content-center">
                <button class="btn btn-success">
                    <Link class="text-decoration-none text-light" to={"/reserve/"+_id}>Select</Link>
                </button>
            </td>
        </tr>
    )
}