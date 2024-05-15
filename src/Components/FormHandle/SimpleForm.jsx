

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.UserName.value);

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="UserName" /> <br />
                <input type="text" name="Email" /> <br />
                <input type="text" name="Phone" /> <br />
                <button>Submit</button>
            </form>
            
        </div>
    );
};

export default SimpleForm;