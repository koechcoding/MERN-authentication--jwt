import React, { useContext} from 'react';
import { useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext";

function AuthOptions (){
    const { userData, setUserData} = useContext(UserContext);

    const history = useHistory();

    const register =()=>{
        history.push("/register");

    const history = useHistory();

    setUserData({
        token: undefined,
        user: undefined
    })
    localStorage.setItem("auth-token", "");
    };
    return(
      <nav className="auth-options">
            {userData.user? (
                <button className="btn btn-primary mr-2" 
                onClick={logout}>Log out</button>
            ):(
                <>
                <button className="btn btn-primary mr -2"
                onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2"
                onClick={Login}>Login</button>
                </>
            )}
      </nav>
    );
}
export default AuthOptions;