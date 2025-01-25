import Hero from "./Hero";
import Navabar from "./Navbar";

function App() {
  return (
    <div>
      <Navabar count={100} name="Yasindu" />
      <Hero />
    </div>
  );
}

export default App;