import Navbar from "./Navbar"
import Home from "./Home"
import Counter from "./Counter"

function App() {
  return (
    <div className="App">

      <Navbar/>
      <div className="content">
        <Home/>
      </div>
      <Counter/>
      
    </div>
  );
}

export default App;
