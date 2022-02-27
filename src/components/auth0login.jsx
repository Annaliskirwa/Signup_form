import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./auth0profile";

const Login = ()=>{
    const {loginWithRedirect} = useAuth0();

    return (
        <div>
            <button className="btn btn-success" onClick={()=>loginWithRedirect()}>Log in via auth0</button>
            <Profile/>
        </div>
    )
}

export default Login;