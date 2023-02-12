import './App.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from './Login.js'
import SignUp from './SignUp.js'
import Home from './Home.js'
import NotFound from './NotFound.js'
import Logout from './Logout.js'
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'
import { GetCookie } from "../utils/Cookies.js";

const App = () => {
  const navigate = useNavigate();
  function handleLogout(){
    navigate("/logout")
  }
  return (
      <div className="App">
        <header className="App-header">
          <div className="Logout-Section">
          {GetCookie("token")
          ?<a onClick={handleLogout} className="Clickable-Text">Logout</a>
          :<></>}
          </div>
        </header>
        <div className="App-body">
            <Routes>
              <Route index element={<Navigate to="/login"/>}/>
              <Route path="/" element={<PublicRoute/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
              </Route>
              <Route path="/" element={<PrivateRoute/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="logout" element={<Logout/>}/>
              </Route>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
        <footer className="App-footer">
          <div className="Description-Section">
            <code>This website is coded using React.js that consumes API that is built with Golang web services</code>
          </div>
        </footer>
      </div>
  );
}

export default App;
