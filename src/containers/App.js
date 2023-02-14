import './App.css';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Login from './Login.js'
import SignUp from './SignUp.js'
import Home from './Home.js'
import NotFound from './NotFound.js'
import Logout from './Logout.js'
import Organization from './Organization'
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'
import { GetCookie } from "../utils/Cookies.js";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  function handleLogout(){
    navigate("/logout")
  }
  function handleLogin(){
    navigate("/login")
  }
  return (
      <div className="App">
        <header className="App-header">
          <div className="Logout-section">
          {GetCookie("token")
          ?<span onClick={handleLogout} className="Clickable-text-button">Logout</span>
          :(location.pathname !== "/login"?<span onClick={handleLogin} className="Clickable-text-button">Login</span>:<></>) }
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
              </Route>
              
              <Route path="/org/:id" element={<Organization/>}>

              </Route>

              <Route path="/logout" element={<Logout/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
        <footer className="App-footer">
          <div className="Description-section">
            <code>2023 @ This website is coded using React.js that consumes API that is built with Golang web services</code>
          </div>
        </footer>
      </div>
  );
}

export default App;
