import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/airPollution">Air Pollution</Link>
      <Link to="/signup">signup</Link>
    </div>
  );
}