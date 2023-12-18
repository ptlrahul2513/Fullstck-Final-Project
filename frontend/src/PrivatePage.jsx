import Cookies from "js-cookie";
import {useNavigate, Link } from "react-route-dom";

export default function PrivatePage(){
    const navigate = useNavigate 
    const logout = () =>{
        Cookies.remove("jwt-cookie")
        navigate("/")
    }
    return(
    <>
    <Link to={"/"} onClick={logout}>
        Back to Login
        </Link>
    <button onClick={logout}>Logout</button>
     <h1>This is a private page </h1>; 
    </>

    )
};