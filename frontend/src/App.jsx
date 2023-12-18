import "./App.css";
// import CreateUser from "./src/CreateUser";
import LoginUser from "./src/LoginUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "./src/PrivatePage";
import NotAuthorized from "./NotAuthorized";
import PrivateRoutes from "../utilities/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/main" element={<PrivatePage/>} />
        </Route>
        
        <Route path="/" element={<LoginUser />} />
        <Route path="not-authoruzed" element={<NotAuthorized />} />
       </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
