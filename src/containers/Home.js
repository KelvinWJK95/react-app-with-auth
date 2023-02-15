import './Home.css';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Home = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();

  function handleMerchantShowcase(){
    navigate("/org/methodist-church")
  }
  return (
    <div className="Home-container">
      <div style={{padding:"20px"}}>
        <h1 >Hello, Welcome Home</h1>
        <p className="Wrap-text">This is your JWT token <br/><br/><code>{cookies.token}</code></p>
        <div onClick={handleMerchantShowcase} style={{paddingTop:"50px"}}><button>Click here</button> to see merchant page showcase</div>
      </div>
    </div>
  );
}

export default Home;
