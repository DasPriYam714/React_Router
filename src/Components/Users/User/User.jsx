

const User = ({user}) => {

    const {id, name, email} = user;

    const dataStyle = {
        border : '2px solid blue',
        borderRadius : '5px',
        padding : '10px',
    }
    return (
        <div style={dataStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            
        </div>
    );
};

export default User;