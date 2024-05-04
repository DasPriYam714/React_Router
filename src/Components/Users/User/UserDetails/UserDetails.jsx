import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const userDetals = useLoaderData()
    const{name} = userDetals;
    return (
        <div>
            <h2>User details of:{name}</h2>
            
        </div>
    );
};

export default UserDetails;