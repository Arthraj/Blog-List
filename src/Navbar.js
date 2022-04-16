// var x = document.body;
// var color = ['#080F0F', "#A4BAB7", "#BEA57D", "#A52422"];
// setInterval(function() {
//    for(let y = 0; y < 4; y++){
//     x.style.backgroundColor = color[y];  
//   }
// }, 3000) ;

const Navbar = () => {
  return (
    <nav className="navbar container ">
      <h1 className="navbar-head ">My Blog Site</h1>
      <div className="links container">
        <a href="/">Hello</a>
        <a href="/create">New Blog</a>
        <a href="login">Login</a>
        <a href="signup" style={{
            // Inline css in JS
            color:"white",
            backgroundColor:"crimson",
            borderRadius:'8px'
            }}
        
        >Sign-Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
