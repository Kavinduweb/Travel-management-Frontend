import React, {useState} from 'react'
import { Button } from 'react-bootstrap'


const GuideLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {username:username, password:password};
        setallEntry([...allEntry, newEntry]);
        console.log(allEntry);
        alert("Guide Logged Successfully!")
    }

    
    return (
        <div className="info">
        <div className="container">
            <div className="w-50 mx-auto shadow p-5">
                    <form action = "" onSubmit = {submitForm}>
                        <center><h3>GUIDE LOGIN</h3></center>
                        <div>
                            <label htmlFor = "username"><strong>Username</strong></label>
                            <input type = "text" 
                            className="form-control"
                            placeholder="Enter Username" 
                            name = "username" 
                            id = "username"
                            autoComplete = "off"
                            value = {username} 
                            onChange = {(e) => setUsername(e.target.value)} />
                        </div>

                        <br/>

                        <div>
                            <label htmlFor = "password"><strong>Password</strong></label>
                            <input type = "password" 
                            className="form-control" 
                            placeholder="Enter Password" 
                            name = "password" 
                            id = "password"
                            autoComplete = "off"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)} />
                        </div>

                        <br/>

                        <Button type = "submit" className = "btn-dark">Login</Button>

                    </form>
            </div>
        </div>
        </div>
    )
}

export default GuideLogin; 
