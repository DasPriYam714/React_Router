import { useLoaderData } from "react-router-dom";
import User from "./User/User";
import "./Users.css"


const Users = () => {
    const users = useLoaderData();

   
    return (
        <div>
            <h2>Total Users:{users.length}</h2>
            <div className="dataSheet">
            {
                users.map(userData => <User key={userData.id} user={userData}></User>)
            }
            </div>
        </div>
    );
};

export default Users;