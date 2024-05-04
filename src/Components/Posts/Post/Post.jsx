import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title}=post;
    const postStyle = {
        border : '2px solid blue',
        borderRadius : '5px',
        padding : '10px',
    }
    return (
        <div style={postStyle}>
            <h2>Title:{title}</h2>
            <p>Post ID:{id}</p>
            <Link to={`/posts/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default Post;