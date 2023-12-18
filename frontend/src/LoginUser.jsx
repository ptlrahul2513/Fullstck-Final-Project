import axios from "axios";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import Cookies from "js-cookie";
export default function LoginUser() {
    const [ formData, setFormData] = useState({
        username: "",
        password: "",
});
const [postResponse, setPostResponse] = useState("");
const [jwtCookie, setJwtCookie] = useState("");

const navigate = useNavigation();

const makeCookie = (cookie) => {
 Cookie.set("jwt-cookie", cookie)

};

const handleOnChange = (evt) => {
    const {name, value } = evt.target;
    setFormData((prevData) => {
        return {
            ...prevData,
            [name]: value,
        };
    });
  };

  const postToDb = async (user) => {
    const postUser = {...user };
   await axios
    .post("https://localhost:3000/login", postUser)
    .then((response) => {setPostResponse(response.data.message)
      if(response.data.message == "Successful Login") {
        const jwtCookie = makeCookie(response.data.token);
         setJwtCookie(jwtCookie)
         navigate("/main");
        
      }
  
    });
   
  };

  const postUser = async (evt) => {
    evt.preventDefault();
    postToDb(formData);
    setFormData({
        username: "",
        password: "",
    });
    console.log(postResponse);
  };


  const handleLogin = (message) => {
    return message == "Successful Login" 
    ? navigate("/main")
    : console.log("Nope");
   
  };
  return (
    <div>
        <form onSubmit={postUser}>
            <label htmlFor="username">Username</label>
            <input
            type= "text"
            name="username"
            id="username"
            onChange={handleOnChange}
            value={formData.username}
            required
            />
            <br/>
            <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
            value={formData.password}
            required
            />
            <br/>
            <button onClick={() => handleLogin(postResponse)}>Login</button>
            {handleLogin(postResponse) && (<button>Go to page</button>)}
        </form>
        {<p>{postResponse}</p>}
    </div>
  );
}