import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const {postId} = useParams();
    const{title, body}= postDetails;
    const navigate = useNavigate();

    console.log(postId)
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