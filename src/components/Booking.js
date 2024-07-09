import RestaurantList from "./RestaurantList";

export default function Booking(){
    return(
        <div>
            <h1>Want to reserve tables of your favourite restaurant !!</h1>
            <br></br>
            <h2>Select a restaurant</h2>
            <div>
                <RestaurantList />
            </div>
        </div>
    )
}
