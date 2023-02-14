import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/">Take me back</Link>
    </div>
  );
}

export default NotFound;
