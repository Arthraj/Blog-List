// var x = document.body;
// var color = ['#080F0F', "#A4BAB7", "#BEA57D", "#A52422"];
// setInterval(function() {
//    for(let y = 0; y < 4; y++){
//     x.style.backgroundColor = color[y];  
//   }
// }, 3000) ;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container ">
      <h1 className="navbar-head ">My Blog Site</h1>
      <div className="links container">
        <Link to="/">Hello</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" style={{
            // Inline css in JS
            color:"white",
            backgroundColor:"crimson",
            borderRadius:'8px'
            }}
        
        >Sign-Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
 