import { Link, useRouteError } from "react-router-dom";



const Errorpage = () => {
    const error= useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Page not found!!</h2>
            <p>{error.statusText || error.message}</p>
            <Link to={"/"}>Go back</Link>

            
        </div>
    );
};

export default Errorpage;