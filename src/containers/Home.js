import './Home.css';
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies] = useCookies();

  return (
    <div style={{width:"50vh"}}>
    <h1 >Hello, Welcome Home
    </h1>
    <p>This is your JWT token <br/><br/><code style={{wordWrap:"break-word"}}>{cookies.token}</code></p>
    </div>
    
  );
}

export default Home;
