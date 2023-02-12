import './Home.css';
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies, setCookie] = useCookies();

  return (
    <div style={{color:"white", width:"50vh"}}>
    <h1 >Hello, Welcome Home
    </h1>
    <p>This is your JWT token <br/><br/><code style={{wordWrap:"break-word"}}>{cookies.token}</code></p>
    </div>
    
  );
}

export default Home;
