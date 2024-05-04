import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const{title, body}= postDetails;
    return (
        <div>
            <h2>Post details of: {title}</h2>
            <p>{body}</p>
            
        </div>
    );
};

export default PostDetails;