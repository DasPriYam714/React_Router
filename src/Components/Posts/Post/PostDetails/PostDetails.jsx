import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const{title, body}= postDetails;
    const navigate = useNavigate();
    const handleGoBack =() =>{

        navigate(-1);
    }
    return (
        <div>
            <h2>Post details of: {title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;