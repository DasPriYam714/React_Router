import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] =useState(null)
    const [password,setPassword] =useState(null)
    const [error, setError] =useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('password must be at least 6 characters')
        }else{
            setError('')
        }
        console.log(email,password)
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value)

    }
    const handlePasswordChange = e =>{
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" name="UserName" /> <br />
                <input onChange={handleEmailChange} type="email" name="Email" /> <br />
                <input onChange={handlePasswordChange} type="password" name="Phone" /> <br />
                <button className="submitButton">Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>

        </div>
    );
};

export default StatefulForm;