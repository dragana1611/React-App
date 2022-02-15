import React from "react";
import { Link, NavLink} from "react-router-dom"; //{ Link, NavLink, withRouter}

const Navbar = () => {
// setTimeout(()=>{
//     props.history.push('./about')
// }, 5000)  
  
    return (
    <nav className="ui raise very padded segment">
      <a href="#" className="ui teal inverted segment">
        Dragana
      </a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <Link to="/about">About</Link>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </nav>
  );
};
export default Navbar; //withRouter(Navbar)
