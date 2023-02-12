import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{color:"white"}}>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/" style={{color:"white"}}>Take me back</Link>
    </div>
  );
}

export default NotFound;
