import React, { useState, useContext} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/misc/ErrorNotice";

function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async(e)=>{
        e.preventDefault();
        try{
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.user);
            history.push("/");
        }catch(err){
            err.response.data.msg && setError(err.response.data.msg)
        }
    };
    return(
        <div className="login">
            <h2>Login</h2>
            {error && <ErrorNotice message={error} clearError={()=>setError(undefined)}/>}
            <form onSubmit={submit}>
                <label>Password: </label>
                <input type="password" id="password" onChange={e=>setPassword(e.target.value)}/>
                <input type="submit" value="Login" className="btn btn-primary"/>
            </form>
        </div>
    );
}
export default Login;